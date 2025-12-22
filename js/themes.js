const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

const changeTheme = () => {
  // carregar preferência salva
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  toggleButton.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "dark") {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
};

export { changeTheme };
