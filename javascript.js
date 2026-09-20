// Menú móvil responsivo (Hamburguesa)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

if (menu && menuLinks) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    const navItems = document.querySelectorAll('.nav-links');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });
}

// Lógica de Envío de Mensaje Directo a tu WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página web se recargue

        // Tu número directo configurado de Argentina (+54 9 11 6448-3503)
        const telefono = "5491164483503";

        // Capturar los datos que completó el usuario
        const name = document.getElementById('name').value.trim();
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value.trim();

        // Validación de campos vacíos
        if (name === "" || category === "" || message === "") {
            alert("Por favor, completa todos los campos del formulario.");
            return;
        }

        // Construir el texto del mensaje
        const textoConsulta = `¡Hola! Te escribo desde la página web.\n\n` +
                              `*Nombre:* ${name}\n` +
                              `*Servicio solicitado:* ${category}\n\n` +
                              `*Consulta:*\n${message}`;

        // Codificar el texto para que la URL sea válida
        const mensajeCodificado = encodeURIComponent(textoConsulta);

        // Crear la URL directa a tu chat de WhatsApp
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

        // Abrir directamente la aplicación o WhatsApp Web
        window.open(urlWhatsApp, '_blank');

        // Limpiar los campos del formulario tras presionar el botón
        contactForm.reset();
    });
}