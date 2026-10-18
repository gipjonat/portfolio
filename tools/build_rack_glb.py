"""Assemble a ControlLogix rack GLB from the 1756 STEP parts.

Coordinates: mm, Y up, +Z = front (towards viewer), X = left->right.
Output is scaled by 0.01 and centred at the origin.
Mesh names are "<MODULE>__<role>" so the web viewer can group by module.

Usage (needs: pip install cadquery-ocp trimesh numpy):
    STEP_DIR=path/to/step/files python tools/build_rack_glb.py rack.glb
    npx @gltf-transform/cli optimize rack.glb public/models/controllogix-rack.glb \
        --compress meshopt --texture-compress false --simplify false --join false --flatten false
"""
import glob, os, sys
import numpy as np
import trimesh
from trimesh.visual.material import PBRMaterial
from trimesh.visual import TextureVisuals
from OCP.STEPControl import STEPControl_Reader
from OCP.BRepMesh import BRepMesh_IncrementalMesh
from OCP.TopExp import TopExp_Explorer
from OCP.TopAbs import TopAbs_FACE, TopAbs_SOLID, TopAbs_REVERSED
from OCP.BRep import BRep_Tool
from OCP.TopLoc import TopLoc_Location
from OCP.TopoDS import TopoDS

UP = os.environ.get("STEP_DIR", "step")
OUT = sys.argv[1] if len(sys.argv) > 1 else "rack.glb"


def step_solids(name, lin=0.12, ang=0.25):
    """Return one unmerged mesh per solid (sharp edges between CAD faces)."""
    path = glob.glob(f"{UP}/*{name}.STEP")[0]
    r = STEPControl_Reader(); r.ReadFile(path); r.TransferRoots(); shp = r.OneShape()
    BRepMesh_IncrementalMesh(shp, lin, False, ang, True)
    out = []
    sx = TopExp_Explorer(shp, TopAbs_SOLID)
    while sx.More():
        solid = sx.Current()
        V, F, off = [], [], 0
        fx = TopExp_Explorer(solid, TopAbs_FACE)
        while fx.More():
            f = TopoDS.Face(fx.Current()); loc = TopLoc_Location()
            tri = BRep_Tool.Triangulation_s(f, loc)
            if tri is not None:
                tr = loc.Transformation()
                for i in range(1, tri.NbNodes() + 1):
                    p = tri.Node(i).Transformed(tr); V.append((p.X(), p.Y(), p.Z()))
                rev = f.Orientation() == TopAbs_REVERSED
                for i in range(1, tri.NbTriangles() + 1):
                    a, b, c = tri.Triangle(i).Get()
                    F.append((off + a - 1, off + c - 1, off + b - 1) if rev else (off + a - 1, off + b - 1, off + c - 1))
                off += tri.NbNodes()
            fx.Next()
        if F:
            out.append(trimesh.Trimesh(np.array(V, float), np.array(F), process=False))
        sx.Next()
    return out


def mat(name, rgb, metal=0.0, rough=0.7, emissive=None):
    c = [int(rgb[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    return PBRMaterial(name=name, baseColorFactor=c + [1.0], metallicFactor=metal,
                       roughnessFactor=rough, emissiveFactor=emissive)


M = {
    "housing": mat("housing", "#22272d", rough=0.62),
    "head": mat("head", "#2e353d", rough=0.55),
    "front": mat("front", "#3a424b", rough=0.5),
    "door": mat("door", "#aab1b8", rough=0.55),
    "detail": mat("detail", "#7d868f", metal=0.4, rough=0.45),
    "chassis": mat("chassis", "#4b545d", metal=0.55, rough=0.42),
    "backplane": mat("backplane", "#1c2126", rough=0.8),
    "connector": mat("connector", "#121518", rough=0.8),
    "led_green": mat("led_green", "#2bd98a", emissive=[0.17, 0.85, 0.54]),
    "led_amber": mat("led_amber", "#f2b33d", emissive=[0.95, 0.7, 0.24]),
    "led_off": mat("led_off", "#3b2a14", rough=0.4),
    "display": mat("display", "#0e2b2a", emissive=[0.12, 0.42, 0.40], rough=0.3),
    "band_blue": mat("band_blue", "#3f7fd1", rough=0.5),
    "band_green": mat("band_green", "#3aa66a", rough=0.5),
    "band_purple": mat("band_purple", "#7a5bc4", rough=0.5),
    "band_orange": mat("band_orange", "#e0892e", rough=0.5),
}

parts = {}  # (module, role) -> [meshes]


def add(module, role, mesh):
    parts.setdefault((module, role), []).append(mesh)


def box(x0, x1, y0, y1, z0, z1):
    b = trimesh.creation.box(extents=[x1 - x0, y1 - y0, z1 - z0])
    b.apply_translation([(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2])
    return b


def classify(solids, door_role):
    """Assign a role to each solid using its bounds relative to the module."""
    allb = np.array([s.bounds for s in solids])
    zmin, zmax = allb[:, 0, 2].min(), allb[:, 1, 2].max()
    ymax = allb[:, 1, 1].max()
    roles = []
    for s in solids:
        (x0, y0, z0), (x1, y1, z1) = s.bounds
        if len(s.faces) < 40:
            roles.append("detail")
        elif z0 <= zmin + 6:
            roles.append("housing")
        elif y0 >= ymax - 45:
            roles.append("head")
        elif z0 >= zmax - 18 and (y1 - y0) > 40:
            roles.append(door_role)
        else:
            roles.append("detail")
    return roles


TOP = 75.0          # top of module housings
PITCH = 35.2        # slot pitch
SLOTS = 7

# slot -> (module id, STEP parts, head cover, front role, colour band)
LAYOUT = [
    ("L64", ["1756_L64"], None, "front", None),
    ("ENBT", ["1756_Scan_Body"], "1756_ENBT_HeadCover", "front", "band_green"),
    ("DHRIO", ["1756_Scan_Body"], "1756_DHRIO_HeadCover", "front", "band_purple"),
    ("OB", ["1756_OB"], None, "door", "band_blue"),
    ("OF", ["1756_OF"], None, "door", "band_orange"),
]

cache = {}
module_bounds = {}

for slot, (mid, names, cover, door_role, band) in enumerate(LAYOUT):
    solids = []
    for n in names:
        if n not in cache:
            cache[n] = step_solids(n)
        solids += [s.copy() for s in cache[n]]
    roles = classify(solids, door_role)
    housing = [s for s, r in zip(solids, roles) if r == "housing"]
    hb = np.array([h.bounds for h in housing])
    hx0, hx1 = hb[:, 0, 0].min(), hb[:, 1, 0].max()
    hy1 = hb[:, 1, 1].max()
    hz0 = hb[:, 0, 2].min()
    shift = np.array([slot * PITCH - hx0 + (PITCH - (hx1 - hx0)) / 2, TOP - hy1, -hz0])

    if cover:
        if cover not in cache:
            cache[cover] = step_solids(cover)
        allb = np.array([s.bounds for s in solids])
        front = allb[:, 1, 2].max()
        for c in cache[cover]:
            c = c.copy()
            cb = c.bounds
            # fill the body's open head pocket: flush with the front, top-aligned
            c.apply_translation([(hx0 + hx1) / 2 - (cb[0][0] + cb[1][0]) / 2,
                                 hy1 - 0.6 - cb[1][1],
                                 front - cb[1][2]])
            solids.append(c); roles.append("head")

    for s, r in zip(solids, roles):
        s.apply_translation(shift)
        add(mid, r, s)

    allb = np.array([s.bounds for s in solids])
    mb = np.array([allb[:, 0].min(0), allb[:, 1].max(0)])
    module_bounds[mid] = mb
    fz = mb[1][2]
    cx = (mb[0][0] + mb[1][0]) / 2

    # status LEDs on the head
    if mid == "L64":
        for i, m in enumerate(["led_green", "led_green", "led_amber", "led_green"]):
            add(mid, m, box(cx - 9 + i * 6 - 1.6, cx - 9 + i * 6 + 1.6, TOP - 9, TOP - 6.5, fz - 0.2, fz + 0.6))
    elif mid in ("ENBT", "DHRIO"):
        add(mid, "display", box(cx - 11, cx + 11, TOP - 15, TOP - 8, fz - 0.2, fz + 0.5))
        add(mid, "led_green", box(cx - 8, cx - 5, TOP - 21, TOP - 18.5, fz - 0.2, fz + 0.6))
        add(mid, "led_green", box(cx - 1.5, cx + 1.5, TOP - 21, TOP - 18.5, fz - 0.2, fz + 0.6))
        add(mid, "led_off", box(cx + 5, cx + 8, TOP - 21, TOP - 18.5, fz - 0.2, fz + 0.6))
    else:
        on = [1, 0, 1, 1, 0, 0, 1, 0]
        for i in range(8):
            x = cx - 12.25 + (i % 4) * 8.2
            y = TOP - 9 - (i // 4) * 4.5
            add(mid, "led_amber" if (mid == "OB" and on[i]) else "led_green" if on[i] else "led_off",
                box(x - 1.4, x + 1.4, y - 1.2, y + 1.2, fz - 0.2, fz + 0.6))
        add(mid, "led_green", box(cx + 9, cx + 12, TOP - 21, TOP - 18.5, fz - 0.2, fz + 0.6))
    if band:
        add(mid, band, box(mb[0][0] + 0.6, mb[1][0] - 0.6, TOP - 30, TOP - 27.5, fz - 0.3, fz + 0.4))

# ---- power supply on the left of the chassis ----
pa = [s.copy() for s in step_solids("1756_PA")]
pab = np.array([s.bounds for s in pa])
pa_x1 = pab[:, 1, 0].max(); pa_y1 = pab[:, 1, 1].max(); pa_z0 = pab[:, 0, 2].min()
pa_shift = np.array([-3.2 - pa_x1, TOP + 2 - pa_y1, -8 - pa_z0])
for s in pa:
    (x0, y0, z0), (x1, y1, z1) = s.bounds
    role = "housing" if z0 <= pa_z0 + 6 else ("detail" if len(s.faces) < 200 else "front")
    s.apply_translation(pa_shift)
    add("PA", role, s)
pab = np.array([s.bounds for s in pa])
pa_front = pab[:, 1, 2].max()
pa_cx = (pab[:, 0, 0].min() + pab[:, 1, 0].max()) / 2
add("PA", "led_green", box(pa_cx + 20, pa_cx + 26, TOP - 30, TOP - 26, pa_front - 0.2, pa_front + 0.6))
module_bounds["PA"] = np.array([pab[:, 0].min(0), pab[:, 1].max(0)])

# ---- chassis (built here; no STEP part for the 1756-A7) ----
ymin_mod = min(b[0][1] for k, b in module_bounds.items() if k != "PA")
W = SLOTS * PITCH
YB, YT = ymin_mod - 8, TOP + 8
add("CHASSIS", "chassis", box(-3, W + 3, YB, YT, -8, -2))                 # back plate
add("CHASSIS", "backplane", box(0, W, YB + 10, YT - 10, -2, 0))          # backplane board
add("CHASSIS", "chassis", box(-3, 0, YB, YT, -2, 34))                     # left wall
add("CHASSIS", "chassis", box(W, W + 3, YB, YT, -2, 34))                  # right wall
add("CHASSIS", "chassis", box(-3, W + 3, TOP + 0.5, YT, -2, 26))          # top rail
add("CHASSIS", "chassis", box(-3, W + 3, YB, ymin_mod - 0.5, -2, 26))     # bottom rail
for i in range(SLOTS + 1):                                                 # slot guides
    x = i * PITCH
    add("CHASSIS", "chassis", box(x - 0.6, x + 0.6, TOP + 0.5 - 3, TOP + 0.5, -2, 26))
    add("CHASSIS", "chassis", box(x - 0.6, x + 0.6, ymin_mod - 0.5, ymin_mod + 2.5, -2, 26))
for i in range(SLOTS):                                                      # backplane connectors
    x = i * PITCH + PITCH / 2
    add("CHASSIS", "connector", box(x - 4, x + 4, -20, 20, 0, 6))
for x in (-3 + 10, W + 3 - 10):                                            # mounting ears
    add("CHASSIS", "chassis", box(x - 7, x + 7, YT, YT + 10, -8, -6))
    add("CHASSIS", "chassis", box(x - 7, x + 7, YB - 10, YB, -8, -6))

# ---- export ----
scene = trimesh.Scene()
allv = []
for (module, role), meshes in parts.items():
    m = trimesh.util.concatenate(meshes) if len(meshes) > 1 else meshes[0]
    allv.append(m.vertices)
centre = (np.vstack(allv).min(0) + np.vstack(allv).max(0)) / 2
for (module, role), meshes in sorted(parts.items()):
    m = trimesh.util.concatenate(meshes) if len(meshes) > 1 else meshes[0]
    m = trimesh.Trimesh(m.vertices, m.faces, process=False)
    m.apply_translation(-centre)
    m.apply_scale(0.01)
    _ = m.vertex_normals
    key = role if role in M else "detail"
    m.visual = TextureVisuals(material=M[key])
    scene.add_geometry(m, geom_name=f"{module}__{role}", node_name=f"{module}__{role}")

scene.export(OUT, include_normals=True)
tris = sum(len(g.faces) for g in scene.geometry.values())
print("wrote", OUT, os.path.getsize(OUT), "bytes,", tris, "triangles,", len(scene.geometry), "meshes")
print("extents (scaled):", np.round(scene.extents, 3))
