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
