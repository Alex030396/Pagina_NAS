// Función asíncrona para cargar un fragmento HTML dentro de un ID específico
async function cargarSeccion(idContenedor, rutaArchivo) {
  try {
    const respuesta = await fetch(rutaArchivo);
    if (!respuesta.ok) throw new Error(`No se pudo cargar: ${rutaArchivo}`);
    const html = await respuesta.text();
    document.getElementById(idContenedor).innerHTML = html;
  } catch (error) {
    console.error("Error cargando sección estructural:", error);
  }
}

// Ejecución controlada al cargar la página
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Cargamos todas las secciones de manera ordenada y esperamos a que terminen
  await Promise.all([
    cargarSeccion("sec-navbar", "sections/navbar.html"),
    cargarSeccion("sec-hero", "sections/hero.html"),
    cargarSeccion("sec-carousel", "sections/carousel.html"),
    cargarSeccion("sec-products", "sections/products.html"),
    cargarSeccion("sec-adult-detail", "sections/adult-detail.html"),
    cargarSeccion("sec-pediatric-detail", "sections/pediatric-detail.html"),
    cargarSeccion("sec-info-tabs", "sections/info-tabs.html"),
    cargarSeccion("sec-footer", "sections/footer.html")
  ]);

  // 2. Re-inicializar componentes dinámicos de Bootstrap que ahora están en el DOM
  rebuilBootstrapComponents();

  // 3. Inicializar Lógica de la Flecha para volver arriba (Tu código original)
  initBackToTop();
});

function rebuilBootstrapComponents() {
  // Inicializa Carousels de manera explícita
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(c => new bootstrap.Carousel(c));

  // Inicializa Tabs de manera explícita
  const triggerTabList = document.querySelectorAll('.nav-tabs button');
  triggerTabList.forEach(triggerEl => new bootstrap.Tab(triggerEl));

  // Refrescar el ScrollSpy del body para rastrear el Navbar inyectado
  const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
  dataSpyList.forEach(spyEl => bootstrap.ScrollSpy.getInstance(spyEl)?.refresh() || new bootstrap.ScrollSpy(spyEl));
}

function initBackToTop() {
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}


  // Mostrar una sección y ocultar las demás
  function mostrarSeccion(idSeccion) {
    // Lista de secciones desplegables
    const secciones = document.querySelectorAll(
      '#section1, #section2'
    );
    // Ocultar todas
    secciones.forEach(seccion => {
      seccion.classList.add('oculto');
    });
    // Mostrar solamente la seleccionada
    const seccionSeleccionada =
      document.getElementById(idSeccion);
    seccionSeleccionada.classList.remove('oculto');
    // Llevar la pantalla hacia la sección seleccionada
    seccionSeleccionada.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  // Ocultar sección y volver a las tarjetas
  function ocultarSeccion(idSeccion) {
    const seccion =
      document.getElementById(idSeccion);
    const destino =
      document.getElementById('nuestro');
    // Ocultar inmediatamente
    seccion.classList.add('oculto');
    // Volver a las tarjetas
    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
 
// Mostrar una sección y ocultar las demás
function mostrarnoticia(idnoticia) {
  // Lista de secciones desplegables
  const secciones = document.querySelectorAll(
    '#noticia1, #noticia2, #noticia3, #noticia4, #noticia5, #noticia6, #noticia7, #noticia8'
  );
  // Ocultar todas
  secciones.forEach(seccion => {
    seccion.classList.add('oculto');
  });
  // Mostrar solamente la seleccionada
  const seccionSeleccionada =
    document.getElementById(idnoticia);
  seccionSeleccionada.classList.remove('oculto');
  // Llevar la pantalla hacia la sección seleccionada
  seccionSeleccionada.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// Ocultar sección y volver a las tarjetas
function ocultarnoticia(idnoticia) {
  const seccion =
    document.getElementById(idnoticia);
  const destino =
    document.getElementById('noticias');
  // Ocultar inmediatamente
  seccion.classList.add('oculto');
  // Volver a las tarjetas
  destino.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Mostrar una sección y ocultar las demás
function mostrarbfs(idbfs) {
  // Lista de secciones desplegables
  const secciones = document.querySelectorAll(
    '#bfs1'
  );
  // Ocultar todas
  secciones.forEach(seccion => {
    seccion.classList.add('oculto');
  });
  // Mostrar solamente la seleccionada
  const seccionSeleccionada =
    document.getElementById(idbfs);
  seccionSeleccionada.classList.remove('oculto');
  // Llevar la pantalla hacia la sección seleccionada
  seccionSeleccionada.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// Ocultar sección y volver a las tarjetas
function ocultarbfs(idbfs) {
  const seccion =
    document.getElementById(idbfs);
  const destino =
    document.getElementById('bfs');
  // Ocultar inmediatamente
  seccion.classList.add('oculto');
  // Volver a las tarjetas
  destino.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


