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

// Cookie lišta - souhlas s analytickými cookies (Google Analytics)
const cookieLista = document.getElementById("cookie-lista");
const cookiePrijmout = document.getElementById("cookie-prijmout");
const cookieOdmitnout = document.getElementById("cookie-odmitnout");
const cookieNastaveni = document.getElementById("cookie-nastaveni");

const cookieSouhlas = localStorage.getItem("cookie-souhlas");

if (!cookieSouhlas) {
  // souhlas ještě nebyl udělen ani odmítnut - zobrazit lištu
  cookieLista.hidden = false;
} else if (cookieSouhlas === "ano") {
  // souhlas byl dřív udělen - rovnou povolit analytiku
  gtag("consent", "update", { analytics_storage: "granted" });
}

cookiePrijmout.addEventListener("click", () => {
  localStorage.setItem("cookie-souhlas", "ano");
  gtag("consent", "update", { analytics_storage: "granted" });
  cookieLista.hidden = true;
});

cookieOdmitnout.addEventListener("click", () => {
  localStorage.setItem("cookie-souhlas", "ne");
  cookieLista.hidden = true;
});

cookieNastaveni.addEventListener("click", () => {
  cookieLista.hidden = false;
});
