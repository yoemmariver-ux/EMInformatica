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

// Lógica de Envío de Mensaje DIRECTO a WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        // Teléfono en formato internacional para WhatsApp (+54 9 11 6448-3503)
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

        // Crear enlace directo a WhatsApp
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

        // Abrir app de WhatsApp o WhatsApp Web
        window.open(urlWhatsApp, '_blank');

        // Limpiar el formulario
        contactForm.reset();
    });
}