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

// ==========================================================
// ASISTENTE VIRTUAL (respuestas predeterminadas + WhatsApp)
// ==========================================================
(function () {
    'use strict';

    var burbuja  = document.getElementById('asisBurbuja');
    var panel    = document.getElementById('asisPanel');
    var cerrar   = document.getElementById('asisCerrar');
    var mensajes = document.getElementById('asisMensajes');
    var form     = document.getElementById('asisForm');
    var entrada  = document.getElementById('asisEntrada');
    var globo    = document.getElementById('asisGlobo');

    if (!burbuja || !panel || !mensajes || !form || !entrada) return;

    // ---------- CONFIGURACIÓN ----------
    var TELEFONO = '5491164483503';
    var SALUDO = '¡Hola! Soy el asistente virtual de ES Informática. ¿En qué te puedo ayudar?';
    var NO_SE = 'No tengo una respuesta para eso. Si querés, una persona del equipo te atiende por WhatsApp.';
    var MENU = ['servicios', 'precios', 'proceso', 'garantia', 'contacto'];
    var LISTA_SERVICIOS = ['tecnico', 'mantenimiento', 'web', 'digitalizacion', 'video', 'dj'];

    // ---------- PREGUNTAS Y RESPUESTAS ----------
    // claves: comienzos de palabra, en minúscula y sin tildes
    // whatsapp: si es true, muestra el botón de WhatsApp debajo de la respuesta
    var TEMAS = [
        {
            id: 'tecnico', boton: 'Servicio Técnico', whatsapp: true,
            claves: ['tecnic', 'repar', 'arregl', 'notebook', 'compu', 'pc', 'hardware', 'falla', 'enciende', 'pantalla', 'equipo'],
            respuesta: 'Hacemos reparación integral de computadoras, notebooks y hardware, con diagnóstico certero y repuestos de calidad.\nContanos qué falla tiene tu equipo y lo evaluamos.'
        },
        {
            id: 'mantenimiento', boton: 'Mantenimiento', whatsapp: true,
            claves: ['mantenimiento', 'limpie', 'virus', 'malware', 'lent', 'optimiz', 'formate', 'windows', 'sistema', 'actualiz'],
            respuesta: 'Hacemos optimización preventiva y correctiva de sistemas operativos, limpieza interna física y remoción de malware.'
        },
        {
            id: 'web', boton: 'Páginas Web', whatsapp: true,
            claves: ['web', 'pagina', 'sitio', 'tienda', 'landing', 'ecommerce', 'online'],
            respuesta: 'Diseñamos y desarrollamos sitios web profesionales, tiendas online y landing pages autoadministrables.'
        },
        {
            id: 'digitalizacion', boton: 'Digitalización', whatsapp: true,
            claves: ['digitaliz', 'foto', 'fotografia', 'document', 'escane', 'imagen', 'analogic'],
            respuesta: 'Convertimos fotografías analógicas, documentos y archivos físicos a formatos digitales de alta fidelidad.'
        },
        {
            id: 'video', boton: 'Edición de Video', whatsapp: true,
            claves: ['video', 'edicion', 'edit', 'montaje', 'postproduccion', 'reel', 'redes'],
            respuesta: 'Hacemos montaje y postproducción audiovisual profesional para redes sociales, publicidad, eventos y empresas.'
        },
        {
            id: 'dj', boton: 'DJ y Sonido', whatsapp: true,
            claves: ['dj', 'sonido', 'musica', 'evento', 'fiesta', 'iluminacion', 'audio', 'cumple', 'casamiento'],
            respuesta: 'Ofrecemos ambientación musical profesional, equipamiento de audio de última generación e iluminación para todo tipo de eventos.'
        },
        {
            id: 'servicios', boton: 'Servicios', whatsapp: false,
            claves: ['servicios', 'ofrec', 'brind', 'hacen', 'haces'],
            respuesta: 'Estos son nuestros servicios:\n• Servicio técnico\n• Mantenimiento\n• Creación de páginas web\n• Digitalización de imágenes\n• Edición de video\n• Servicio de DJ y sonido\n\nElegí uno para ver más detalles.',
            siguientes: LISTA_SERVICIOS
        },
        {
            id: 'proceso', boton: 'Cómo trabajamos', whatsapp: false,
            claves: ['proceso', 'pasos', 'funciona', 'trabajan', 'trabajo', 'metodo'],
            respuesta: 'Trabajamos en 4 pasos:\n1. Consulta: nos escribís tu necesidad o la falla del equipo.\n2. Presupuesto: evaluamos el caso y te damos una cotización clara, sin costos ocultos.\n3. Ejecución: reparamos o desarrollamos tu proyecto.\n4. Entrega: probás el resultado y contás con nuestro respaldo técnico.'
        },
        {
            id: 'precios', boton: 'Precios', whatsapp: true,
            claves: ['precio', 'cuanto', 'cuesta', 'costo', 'cobran', 'presupuesto', 'cotiz', 'valor', 'tarifa'],
            respuesta: 'El precio depende de cada caso. Evaluamos tu consulta y te damos una cotización clara, sin costos ocultos.\nMandanos los detalles por WhatsApp o desde el formulario de contacto.'
        },
        {
            id: 'garantia', boton: 'Garantía', whatsapp: false,
            claves: ['garant', 'respald', 'confian'],
            respuesta: 'Todos nuestros trabajos cuentan con garantía y respaldo técnico. Probás el resultado antes de la entrega.'
        },
        {
            id: 'contacto', boton: 'Contacto', whatsapp: true,
            claves: ['contact', 'telefono', 'tel', 'mail', 'email', 'correo', 'whatsapp', 'wsp', 'numero', 'llamar', 'hablar', 'comunic', 'escribir'],
            respuesta: 'Podés contactarnos por:\n• Email: contacto@esinformatica.com\n• Teléfono / WhatsApp: +54 9 11 6448-3503\n• El formulario de contacto de esta página'
        }
    ];

    var SALUDOS = ['hola', 'buenas', 'buenos', 'buen'];
    var GRACIAS = ['gracias', 'gracia', 'genial', 'perfecto', 'dale'];
    var CHAU    = ['chau', 'adios', 'hasta'];

    // ---------- FUNCIONES ----------
    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function coincide(token, clave) {
        return clave.length <= 3 ? token === clave : token.indexOf(clave) === 0;
    }

    function buscarTema(pregunta) {
        var tokens = normalizar(pregunta).split(' ');
        var mejor = null;
        var mejorPuntaje = 0;
        TEMAS.forEach(function (tema) {
            var puntaje = 0;
            tema.claves.forEach(function (clave) {
                if (tokens.some(function (t) { return coincide(t, clave); })) puntaje++;
            });
            if (puntaje > mejorPuntaje) {
                mejorPuntaje = puntaje;
                mejor = tema;
            }
        });
        return mejor;
    }

    function tieneAlguna(pregunta, lista) {
        var tokens = normalizar(pregunta).split(' ');
        return tokens.some(function (t) { return lista.indexOf(t) !== -1; });
    }

    function temaPorId(id) {
        for (var i = 0; i < TEMAS.length; i++) {
            if (TEMAS[i].id === id) return TEMAS[i];
        }
        return null;
    }

    function bajar() {
        mensajes.scrollTop = mensajes.scrollHeight;
    }

    function agregarMensaje(texto, quien) {
        var div = document.createElement('div');
        div.className = 'asis-msg ' + quien;
        div.textContent = texto;
        mensajes.appendChild(div);
        bajar();
    }

    function urlWhatsapp(consulta) {
        var texto = '¡Hola ES Informática!\n\n*Consulta:* ' + consulta;
        return 'https://wa.me/' + TELEFONO + '?text=' + encodeURIComponent(texto);
    }

    function agregarBotonWhatsapp(consulta, etiqueta) {
        var a = document.createElement('a');
        a.className = 'asis-whatsapp';
        a.href = urlWhatsapp(consulta);
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = etiqueta || 'Continuar por WhatsApp';
        mensajes.appendChild(a);
        bajar();
    }

    function agregarOpciones(ids) {
        var anteriores = mensajes.querySelectorAll('.asis-opciones');
        anteriores.forEach(function (el) { el.remove(); });

        var cont = document.createElement('div');
        cont.className = 'asis-opciones';

        ids.forEach(function (id) {
            var tema = temaPorId(id);
            if (!tema) return;
            var b = document.createElement('button');
            b.type = 'button';
            b.className = 'asis-opcion';
            b.textContent = tema.boton;
            b.addEventListener('click', function () {
                agregarMensaje(tema.boton, 'usuario');
                responder(tema.boton, tema);
            });
            cont.appendChild(b);
        });

        var wa = document.createElement('a');
        wa.className = 'asis-opcion';
        wa.href = urlWhatsapp('Quisiera hablar con una persona.');
        wa.target = '_blank';
        wa.rel = 'noopener noreferrer';
        wa.textContent = 'Hablar por WhatsApp';
        cont.appendChild(wa);

        mensajes.appendChild(cont);
        bajar();
    }

    function responder(pregunta, temaDirecto) {
        var tema = temaDirecto || buscarTema(pregunta);
        setTimeout(function () {
            if (tema) {
                agregarMensaje(tema.respuesta, 'bot');
                if (tema.whatsapp) {
                    agregarBotonWhatsapp('Quiero consultar por: ' + tema.boton, 'Consultar por WhatsApp');
                }
                agregarOpciones(tema.siguientes || MENU);
            } else if (tieneAlguna(pregunta, SALUDOS)) {
                agregarMensaje(SALUDO, 'bot');
                agregarOpciones(MENU);
            } else if (tieneAlguna(pregunta, GRACIAS)) {
                agregarMensaje('¡De nada! Si necesitás algo más, acá estoy.', 'bot');
                agregarOpciones(MENU);
            } else if (tieneAlguna(pregunta, CHAU)) {
                agregarMensaje('¡Hasta pronto! Gracias por visitar ES Informática.', 'bot');
            } else {
                agregarMensaje(NO_SE, 'bot');
                agregarBotonWhatsapp(pregunta, 'Escribinos por WhatsApp');
                agregarOpciones(MENU);
            }
        }, 350);
    }

    // ---------- ABRIR Y CERRAR ----------
    var saludoMostrado = false;

    function ocultarGlobo() {
        if (globo) globo.classList.remove('visible');
    }

    function abrir() {
        panel.classList.add('abierto');
        burbuja.setAttribute('aria-expanded', 'true');
        ocultarGlobo();
        if (!saludoMostrado) {
            saludoMostrado = true;
            agregarMensaje(SALUDO, 'bot');
            agregarOpciones(MENU);
        }
        if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
            entrada.focus();
        }
    }

    function cerrarPanel() {
        panel.classList.remove('abierto');
        burbuja.setAttribute('aria-expanded', 'false');
        burbuja.focus();
    }

    burbuja.addEventListener('click', function () {
        if (panel.classList.contains('abierto')) cerrarPanel();
        else abrir();
    });

    if (cerrar) cerrar.addEventListener('click', cerrarPanel);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && panel.classList.contains('abierto')) cerrarPanel();
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var pregunta = entrada.value.trim();
        if (!pregunta) return;
        agregarMensaje(pregunta, 'usuario');
        entrada.value = '';
        responder(pregunta);
    });

    // ---------- GLOBO DE INVITACIÓN (una sola vez por visita) ----------
    if (globo) {
        var yaMostrado = false;
        try { yaMostrado = sessionStorage.getItem('asisGlobo') === '1'; } catch (err) {}

        if (!yaMostrado) {
            setTimeout(function () {
                if (panel.classList.contains('abierto')) return;
                globo.classList.add('visible');
                try { sessionStorage.setItem('asisGlobo', '1'); } catch (err) {}
                setTimeout(ocultarGlobo, 7000);
            }, 4000);
        }
    }
})();
