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

// Lógica de Envío de Mensaje DIRECTO a tu WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita recargar la página

        // Número para WhatsApp Argentina en formato correcto para apertura directa:
        // Código de país (54) + Código de área (11) + Número (64483503) sin el "9"
        const telefono = "541164483503";

        // Capturar los datos del formulario
        const name = document.getElementById('name').value.trim();
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value.trim();

        if (name === "" || category === "" || message === "") {
            alert("Por favor, completa todos los campos del formulario.");
            return;
        }

        // Armar el texto del mensaje
        const textoConsulta = `¡Hola! Te escribo desde la web.\n\n` +
                              `*Nombre:* ${name}\n` +
                              `*Servicio solicitado:* ${category}\n\n` +
                              `*Detalles de la consulta:*\n${message}`;

        // Codificar el texto para la URL
        const mensajeCodificado = encodeURIComponent(textoConsulta);

        // Crear la URL directa
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeCodificado}`;

        // Abrir directamente la conversación
        window.location.href = urlWhatsApp;

        // Limpiar formulario
        contactForm.reset();
    });
}