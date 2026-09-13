// Hamburger menu - přepínání zobrazení navigace na mobilu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("otevrena");
  hamburger.setAttribute("aria-expanded", nav.classList.contains("otevrena"));
});

// FAQ - při otevření jedné otázky se ostatní zavřou
const faqPolozky = document.querySelectorAll("#faq details");

faqPolozky.forEach((polozka) => {
  polozka.addEventListener("toggle", () => {
    if (polozka.open) {
      faqPolozky.forEach((jina) => {
        if (jina !== polozka) jina.open = false;
      });
    }
  });
});

// Hlavička - po odscrollování přidá třídu scrolled
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
