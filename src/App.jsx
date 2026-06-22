import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectPanel from "./components/ProjectPanel";
import SkillsPanel from "./components/SkillsPanel";
import { PROJECT_REGISTRY } from "./projectRegistry"; // External dataset link
import { SKILLS_REGISTRY } from "./skillsRegistry";

// Combined nav registry: merges project entries with the skills page's
// meta record so Sidebar's existing key/type filtering logic works
// unmodified across both data sources.
const NAV_REGISTRY = {
  ...PROJECT_REGISTRY,
  SKILLS: SKILLS_REGISTRY.meta,
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("ABOUT_ME");

  return (
    <div className="flex h-screen w-screen bg-hmi-bg text-text-primary font-mono overflow-hidden">
      {/* 1. Re-architected Modular Sidebar Section */}
      <Sidebar
        projects={NAV_REGISTRY}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />

      {/* Mobile background shadow block */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Main Panel Content Frame */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* 2. Top Header Ribbon Module */}
        <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

        {/* Scrolling System Environment Workspace */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto space-y-6 max-w-[1800px] w-full mx-auto">
          {/* Static Top-Row Diagnostics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-hmi-panel border border-hmi-border rounded-lg shadow-sm">
              <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-1">
                Core Architecture
              </div>
              <div className="font-display text-lg font-bold text-text-primary">
                React + Vite + Tailwind
              </div>
            </div>

            <div className="p-4 bg-hmi-panel border border-hmi-border rounded-lg shadow-sm">
              <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-1">
                UI Responsive Breakpoint
              </div>
              <div className="font-display text-lg font-bold text-status-info">
                Adaptive Scale HMI
              </div>
            </div>

            <div className="p-4 bg-hmi-panel border border-hmi-border rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-1">
                Active Register Node
              </div>
              <div className="font-mono text-lg font-bold text-status-warn">
                {NAV_REGISTRY[activeProject].id}
              </div>
            </div>
          </div>

          {/* 3. Interactive Main Dynamic Inspection Module */}
          {activeProject === "SKILLS" ? (
            <SkillsPanel activeKey={activeProject} data={SKILLS_REGISTRY} />
          ) : (
            <ProjectPanel
              activeKey={activeProject}
              data={NAV_REGISTRY[activeProject]}
            />
          )}
        </main>
      </div>
    </div>
  );
}
