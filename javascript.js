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

// Lógica de Envío del Formulario Modificado a WhatsApp
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Capturar datos del nuevo formulario
    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value.trim();

    // Validación preventiva por si acaso
    if(name === "" || category === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // NÚMERO CORREGIDO PARA LA API INTERNACIONAL DESBLOQUEADA DE WHATSAPP
    const phoneNumber = "541164483503"; 

    // Formatear el mensaje estructurado
    const textMessage = `¡Hola ES Informática!%0A%0AMi nombre es: *${name}*%0A%0A*Servicio solicitado:*%0A_ ${category} _%0A%0A*Detalles de la consulta:*%0A${message}`;

    // Crear el enlace universal desbloqueado
    const whatsappUrl = `https://wa.me{phoneNumber}?text=${textMessage}`;

    // Abrir la ventana del chat de inmediato
    window.open(whatsappUrl, '_blank');
    
    // Limpiar el formulario
    contactForm.reset();
});
