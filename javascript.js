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

        // Tu número en formato internacional para WhatsApp Argentina (+54 9 11 6448-3503)
        const telefono = "5491164483503";

        // Capturar los datos del formulario
        const name = document.getElementById('name').value.trim();
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value.trim();

        if (name === "" || category === "" || message === "") {
            alert("Por favor, completa todos los campos del formulario.");
            return;
        }

        // Armar el texto del mensaje
        const textoConsulta = `¡Hola ES Informática!\n\n` +
                              `*Mi nombre es:* ${name}\n` +
                              `*Servicio solicitado:* ${category}\n\n` +
                              `*Detalles de la consulta:*\n${message}`;

        // Codificar el texto de forma segura para URL
        const mensajeCodificado = encodeURIComponent(textoConsulta);

        // Crear enlace directo a tu número
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

        // Abrir directamente la app de WhatsApp o WhatsApp Web en tu chat
        window.open(urlWhatsApp, '_blank');

        // Limpiar el formulario
        contactForm.reset();
    });
}