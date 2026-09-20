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

// Lógica de Envío del Formulario DIRECTO con el número incrustado de forma fija
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Tu número de WhatsApp configurado
        const phone = "5491164483503";

        // Capturar datos del formulario
        const name = document.getElementById('name').value.trim();
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value.trim();

        if (name === "" || category === "" || message === "") {
            alert("Por favor, completa todos los campos del formulario.");
            return;
        }

        // Formatear el mensaje estructurado
        const textMessage = `¡Hola!%0A%0AMi nombre es: *${encodeURIComponent(name)}*%0A%0A*Servicio solicitado:*%0A_ ${encodeURIComponent(category)} _%0A%0A*Detalles de la consulta:*%0A${encodeURIComponent(message)}`;

        // Enlace corregido a WhatsApp apuntando a tu número (+5491164483503)
        const whatsappUrl = `https://wa.me/${phone}?text=${textMessage}`;

        // Abrir la ventana del chat de inmediato
        window.open(whatsappUrl, '_blank');
        
        // Limpiar el formulario
        contactForm.reset();
    });
}