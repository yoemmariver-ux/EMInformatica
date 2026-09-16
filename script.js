document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('formResponse');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicio').value;

            responseMessage.style.color = '#34d399';
            responseMessage.textContent = `¡Gracias ${nombre}! Tu consulta sobre "${servicio}" ha sido enviada con éxito. Te responderemos a la brevedad.`;

            contactForm.reset();

            setTimeout(() => {
                responseMessage.textContent = '';
            }, 5000);
        });
    }
});