// ====== MEGA MENU: abrir con hover en desktop (y click en móvil)
// Bootstrap por defecto abre con click. Este JS lo mejora para escritorio.
(function(){
    const mq = window.matchMedia("(min-width: 992px)");
    const dropdowns = document.querySelectorAll(".navbar .dropdown");

    function enableHover(){
    dropdowns.forEach(dd => {
        const toggle = dd.querySelector('[data-bs-toggle="dropdown"]');
        const menu = dd.querySelector(".dropdown-menu");

        dd.addEventListener("mouseenter", () => {
        if (!mq.matches) return;
        const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
        instance.show();
        });

        dd.addEventListener("mouseleave", () => {
        if (!mq.matches) return;
        const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
        instance.hide();
        });

        // Evita que el hover cierre instantáneo al pasar el mouse por encima del menú
        menu.addEventListener("mouseenter", () => {
        if (!mq.matches) return;
        const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
        instance.show();
        });
    });
    }

    enableHover();
})();