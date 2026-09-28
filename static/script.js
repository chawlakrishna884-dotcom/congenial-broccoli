// Small mobile navigation helper and a subtle reveal effect.
const menu = document.querySelector(".menu");
const nav = document.querySelector(".topbar nav");
menu?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("mobile-open");
  menu.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".topbar nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("mobile-open"));
});
