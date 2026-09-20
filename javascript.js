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

// Lógica de Envío del Formulario DIRECTO a WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Tu número de WhatsApp sin signos ni espacios (Código de país 54 + 9 + área + número)
        const phone = "5491164483503";

        // Capturar datos del formulario
        const name = document.getElementById('name').value.trim();
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value.trim();

        if (name === "" || category === "" || message === "") {
            alert("Por favor, completa todos los campos del formulario.");
            return;
        }

        // Crear el texto con saltos de línea normales
        const rawMessage = `¡Hola! Me contacto desde la web.\n\n` +
                           `*Nombre:* ${name}\n` +
                           `*Servicio solicitado:* ${category}\n\n` +
                           `*Detalles de la consulta:*\n${message}`;

        // Codificar el mensaje completo para que no falle ningún carácter especial
        const encodedMessage = encodeURIComponent(rawMessage);

        // Enlace optimizado con la API oficial de WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

        // Redirecciona directamente a la conversación de WhatsApp
        window.location.href = whatsappUrl;

        // Limpiar el formulario
        contactForm.reset();
    });
}