import { updateLang } from "./lang.js";
import { updateTheme } from "./themes.js";

const activeEvents = () => {
  const toggleButton = document.getElementById("theme-toggle");
  const langButton = document.getElementById("lang-toggle");

  toggleButton.addEventListener("click", () => {
    updateTheme();
  });
  langButton.addEventListener("click", () => {
    updateLang()
});
};

export { activeEvents };
