// Menú móvil
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

// Envío directo al WhatsApp extraído del QR
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    const phoneNumber = "5493834594343"; 
    const textMessage = `¡Hola ES Informática!%0A%0AMi nombre es: *${name}*%0ACorreo de contacto: _${email}_%0A%0A*Consulta o servicio solicitado:*%0A${message}`;
    const whatsappUrl = `https://wa.me{phoneNumber}?text=${textMessage}`;

    window.open(whatsappUrl, '_blank');
    contactForm.reset();
});
