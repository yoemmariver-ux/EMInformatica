// Lógica para el menú móvil desplegable (Hamburguesa)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Cerrar el menú automáticamente al hacer clic en cualquier enlace de navegación
const navItems = document.querySelectorAll('.nav-links');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});

// Validación básica y envío simulado del Formulario de Contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que la página se recargue

    // Obtener los datos de los inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Simulación de envío exitoso
    alert(`¡Muchas gracias por comunicarte, ${name}! Hemos recibido tu mensaje correctamente. Nos contactaremos a ${email} a la brevedad.`);
    
    // Limpiar el formulario
    contactForm.reset();
});
