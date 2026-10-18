// One place for personal details used across the site.
export const SITE = {
  name: "Jonathon Gilliam",
  initials: "JG",
  tagline: "Controls · Automation",
  location: "Tampa Bay, FL",
  email: "Gipjonat@Gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/jbgilliam",
  linkedinLabel: "linkedin.com/in/jbgilliam",
  // Resume lives in /public. `resumeDownloadName` is the filename visitors save.
  resumePath: "/JGilliam_Resume.pdf",
  resumeDownloadName: "jonathon-gilliam-resume.pdf",
};

// Sidebar / section anchors, in page order.
export const NAV_ITEMS = [
  { id: "top", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Projects you're currently working on. Each entry shows up as an
// "In progress" card under Featured work; leave the list empty to hide it.
// Example:
// { title: "Home PLC trainer", summary: "Building a CompactLogix bench rig…",
//   updated: "Oct 2026", stack: "CompactLogix · PowerFlex 525" }
export const IN_PROGRESS = [];
