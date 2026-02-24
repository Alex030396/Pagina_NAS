// FLECHA PARA SUBIR AL INICIO DE LA PAGINAS
const backToTop = document.getElementById("backToTop");

  // Mostrar/ocultar cuando haces scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  // Subir al inicio
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });