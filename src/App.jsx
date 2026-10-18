import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import ProjectsSection from "./Components/ProjectsSection";
import ProjectDetail from "./Components/ProjectDetail";
import ExperienceSection from "./Components/ExperienceSection";
import SkillsSection from "./Components/SkillsSection";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import { PROJECT_REGISTRY } from "./projectRegistry";

// Tiny hash router — no dependency, works on GitHub Pages.
//   #/projects/<slug>  → that project's case-study page
//   #<section-id>      → homepage, scrolled to that section
const PROJECT_ROUTE = /^#\/projects\/([\w-]+)$/;

function readRoute() {
  const hash = window.location.hash;
  const match = hash.match(PROJECT_ROUTE);
  if (match) {
    const key = Object.keys(PROJECT_REGISTRY).find(
      (k) => PROJECT_REGISTRY[k].slug === match[1],
    );
    if (key) return { view: "project", projectKey: key };
  }
  return { view: "home", section: hash.replace(/^#/, "") || null };
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setRoute(readRoute());
      setMenuOpen(false);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // After a route change: project pages start at the top; homepage links
  // scroll to their section (needed when coming back from a project page).
  useEffect(() => {
    if (route.view === "project") {
      window.scrollTo({ top: 0 });
      return;
    }
    if (route.section) {
      const el = document.getElementById(route.section);
      if (el) el.scrollIntoView();
    }
  }, [route]);

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const project =
    route.view === "project" ? PROJECT_REGISTRY[route.projectKey] : null;

  return (
    <div className="min-h-screen bg-hmi-bg text-text-primary md:flex">
      <Sidebar
        view={route.view}
        isOpen={menuOpen}
        setIsOpen={setMenuOpen}
      />

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          aria-hidden="true"
        />
      )}

      <main id="top" className="flex-1 min-w-0">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-8 lg:px-14 pb-16">
          {project ? (
            <ProjectDetail projectKey={route.projectKey} data={project} />
          ) : (
            <div className="flex flex-col gap-24 md:gap-28">
              <Hero />
              <ProjectsSection />
              <ExperienceSection />
              <SkillsSection />
              <AboutSection />
              <ContactSection />
            </div>
          )}
          <Footer />
        </div>
      </main>
    </div>
  );
}
