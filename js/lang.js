import { translations } from "./state.js";

const translatePage = (lang) => {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");
    let text = translations[lang];
    keys.forEach((k) => {
      text = text?.[k];
    });

    if (text) {
      el.textContent = text;
    }
  });
};

const updateLang = () => {
  const defaultLang = "en";
  const currentLang = localStorage.getItem("lang") || defaultLang;
  const newLang = currentLang === "en" ? "pt" : "en";

  localStorage.setItem("lang", newLang);
  translatePage(newLang);
};

export { translatePage, updateLang };
