export const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  window.document.documentElement.classList.toggle(
    "dark",
    savedTheme === "dark" || (!savedTheme && prefersDarkQuery.matches)
  );
};
