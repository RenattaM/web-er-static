// Hamburger menu - přepínání zobrazení navigace na mobilu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("otevrena");
  hamburger.setAttribute("aria-expanded", nav.classList.contains("otevrena"));
});
