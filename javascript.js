// Menú móvil responsivo (Hamburguesa)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

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

// Lógica de Envío del Formulario DIRECTO con el número incrustado de forma fija
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Capturar datos del formulario
    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value.trim();

    if(name === "" || category === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Formatear el mensaje estructurado
    const textMessage = `¡Hola ES Informática!%0A%0AMi nombre es: *${name}*%0A%0A*Servicio solicitado:*%0A_ ${category} _%0A%0A*Detalles de la consulta:*%0A${message}`;

    // Ponemos el número fijo directamente en la URL para que no dependa de variables intermedias
    const whatsappUrl = `https://wa.me{textMessage}`;

    // Abrir la ventana del chat de inmediato
    window.open(whatsappUrl, '_blank');
    
    // Limpiar el formulario
    contactForm.reset();
});
