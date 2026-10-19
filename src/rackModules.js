// Modules in the hero's ControlLogix rack, left to right.
// `id` matches the mesh-name prefix in public/models/controllogix-rack.glb
// ("L64__housing", "L64__head", …), so the 3D viewer can highlight a module.
export const RACK_MODULES = [
  {
    id: "PA",
    part: "1756-PA",
    name: "Power supply",
    blurb: "Where every troubleshoot starts: verify power before anything else.",
    href: "#experience",
  },
  {
    id: "L64",
    part: "1756-L64",
    name: "Controller",
    blurb: "Studio 5000 ladder logic, online edits and tag hunting.",
    href: "#/projects/sorter-lost-tracking",
  },
  {
    id: "ENBT",
    part: "1756-ENBT",
    name: "EtherNet/IP",
    blurb: "Comms through RSLinx, managed switches, VLANs.",
    href: "#skills",
  },
  {
    id: "DHRIO",
    part: "1756-DHRIO",
    name: "DH+ / Remote I/O",
    blurb: "Legacy networks that still run plenty of plants.",
    href: "#skills",
  },
  {
    id: "OB",
    part: "1756-OB",
    name: "Digital outputs",
    blurb: "Motor starters, MDR, solenoids, stack lights.",
    href: "#/projects/extendo-rewire",
  },
  {
    id: "OF",
    part: "1756-OF",
    name: "Analog outputs",
    blurb: "VFD speed references and process control.",
    href: "#skills",
  },
];

export const DEFAULT_MODULE = "L64";

// Model credit — shown under the viewer.
export const RACK_CREDIT = {
  text: "Module geometry: “Allen bradley Controllogix PLC” by 3DGEN on GrabCAD",
  url: "https://grabcad.com/library/allen-bradley-controllogix-plc",
};

// PowerFlex 525 model — shown on the VFD test bench project page.
// Required by the model's CC BY license. Add the Sketchfab page as `url`
// to link the title.
export const DRIVE_CREDIT = {
  title: "PowerFlex 525",
  author: "Aquent Studios at Rockwell Automation",
  url: null,
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
};
