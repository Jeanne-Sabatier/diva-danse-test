document.addEventListener("DOMContentLoaded", () => {

  fetch("/actualites/actualites.json")
    .then(r => r.json())
    .then(data => {
      const actu = data.actualites[0];
      if (!actu) return;

      const img = document.querySelector(".actu-img");
      const titre = document.querySelector(".actu-title");
      const date = document.querySelector(".date");
      const contenu = document.querySelector(".actu-content");

      if (img) { img.src = actu.image; img.alt = actu.titre; }
      if (titre) titre.textContent = actu.titre;
      if (date) date.textContent = actu.date;
      if (contenu) contenu.textContent = actu.texte;
    })
    .catch(err => console.error("Erreur actu accueil :", err));

  (function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    if (!hamburger || !nav) return;
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", hamburger.classList.contains("active"));
    });
    nav.querySelectorAll(".header-link").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("open");
      });
    });
  })();

});
