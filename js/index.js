import { activeEvents } from "./events.js";
import { translatePage } from "./lang.js";
import { initializeTheme } from "./themes.js";

const defaultLang = "en";
const savedLang = localStorage.getItem("lang") || defaultLang;

initializeTheme();
translatePage(savedLang);
activeEvents();
