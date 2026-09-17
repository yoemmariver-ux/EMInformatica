// ==========================================================================
// 1. CONTROL DEL MENÚ DE NAVEGACIÓN MÓVIL (HAMBURGUESA)
// ==========================================================================
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

// Alternar estados visuales del menú al hacer clic en el icono móvil
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Cerrar el menú desplegable de forma automática al presionar un enlace
const navItems = document.querySelectorAll('.nav-links');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});
// ==========================================================================
// 2. LOGICA DE ENVÍO DEL FORMULARIO DIRECTO A WHATSAPP
// ==========================================================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Detener el comportamiento de recarga por defecto

    // Capturar y limpiar los espacios en blanco de los datos del formulario
    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value.trim();

    // Validación de seguridad para campos vacíos
    if(name === "" || category === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // FORMATO INTERNACIONAL CORRECTO: Sin prefijo 9, sin espacios ni signos +.
    const phoneNumber = "541164483503"; 

    // Estructuración del mensaje de texto usando formato codificado para URLs (%0A = Enter)
    const textMessage = `¡Hola ES Informática!%0A%0AMi nombre es: *${name}*%0A%0A*Servicio solicitado:*%0A_ ${category} _%0A%0A*Detalles de la consulta:*%0A${message}`;

    // Construcción del enlace final para la API de redirección universal de WhatsApp
    const whatsappUrl = `https://wa.me{phoneNumber}?text=${textMessage}`;

    // Abrir de forma inmediata la ventana de chat con el texto preestablecido
    window.open(whatsappUrl, '_blank');
    
    // Limpiar los campos del formulario de contacto para una nueva entrada
    contactForm.reset();
});
