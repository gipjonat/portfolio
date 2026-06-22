// Centralized Font Awesome icon registry. Import icon keys from here
// rather than importing fontawesome icons directly in components — this
// way every icon used across the app is swappable in one place.
import {
  faGear,
  faChartLine,
  faChartSimple,
  faPlug,
  faSatelliteDish,
  faBrain,
  faDisplay,
  faShieldHalved,
  faRulerCombined,
  faStethoscope,
  faTriangleExclamation,
  faScrewdriverWrench,
  faEnvelope,
  faDownload,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const ICONS = {
  // Section / nav icons (sectionRegistry.js)
  systemConfig: faGear,
  registerMap: faSatelliteDish,
  fieldOps: faChartSimple,
  remoteInterlock: faPlug,

  // Skill group icons (skillsRegistry.js)
  plcLogic: faBrain,
  hmiScada: faDisplay,
  networking: faPlug,
  safety: faShieldHalved,
  docsCad: faRulerCombined,

  // ProjectPanel section icons
  engineeringScope: faGear,
  schematic: faRulerCombined,
  diagnosticTrace: faStethoscope,
  fieldLog: faTriangleExclamation,
  registerDelta: faChartLine,
  tag: faScrewdriverWrench,
  email: faEnvelope,
  linkedin: faLinkedin,

  // Chrome / UI controls
  download: faDownload,
  close: faXmark,
  menu: faBars,
};
