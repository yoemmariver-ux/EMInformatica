// ==========================================================================
// 1. CONTROL DEL MENÚ DE NAVEGACIÓN MÓVIL (HAMBURGUESA)
// ==========================================================================
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

// Alternar estados del menú al hacer clic
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Cerrar el menú desplegable automáticamente al presionar cualquier enlace
const navItems = document.querySelectorAll('.nav-links');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});

// ==========================================================================
// 2. PROCESAMIENTO DEL FORMULARIO Y REDIRECCIÓN ENLAZADA A WHATSAPP
// ==========================================================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Detener el envío estándar por recarga de página

    // Capturar y limpiar los valores ingresados por el usuario
    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value.trim();

    // Verificación preventiva de seguridad estructural
    if(name === "" || category === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Número de destino estructurado en formato internacional puro para API
    const phoneNumber = "5491164483503"; 

    // Construcción del cuerpo del mensaje formateado con saltos de línea codificados (%0A)
    const textMessage = `¡Hola ES Informática!%0A%0AMi nombre es: *${name}*%0A%0A*Servicio solicitado:*%0A_ ${category} _%0A%0A*Detalles de la consulta:*%0A${message}`;

    // Generar la URL final del protocolo universal de WhatsApp
    const whatsappUrl = `https://wa.me{phoneNumber}?text=${textMessage}`;

    // Ejecutar la apertura en paralelo del chat de destino listo para envío
    window.open(whatsappUrl, '_blank');
    
    // Restaurar los elementos iniciales del formulario limpio
    contactForm.reset();
});
