/* =============================================
   NAVBAR COMPARTIDO - TANDEM
   Funciones de navegación y menú móvil
   ============================================= */

// Rutas de las páginas para GitHub Pages
const BASE_URL = '/tandem-front';

const RUTAS = {
    inicio: BASE_URL + '/inicio/inicio.html',
    infancia: BASE_URL + '/infancia/infancia.html',
    juventud: BASE_URL + '/juventud/juventud.html',
    mayores: BASE_URL + '/mayores/mayores.html',
    contacto: BASE_URL + '/contacto/contacto.html',
    nosotros: BASE_URL + '/quienes-somos/quienes-somos.html',
    cookies: BASE_URL + '/cookies/cookies.html',
    'canal-etico': BASE_URL + '/canal-etico/canal-etico.html',
    staff: BASE_URL + '/staff/staff.html'
};

/**
 * Toggle del menú móvil
 */
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    if (!hamburger || !mobileMenu || !overlay) return;
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Bloquear scroll del body cuando el menú está abierto
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Cerrar menú móvil si está abierto
 */
function cerrarMenuMovil() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMenu();
    }
}

/**
 * Navegar a una sección/página
 * @param {string} seccion - Nombre de la sección
 */
function navegarA(seccion) {
    cerrarMenuMovil();
    
    const ruta = RUTAS[seccion];
    if (ruta) {
        window.location.href = ruta;
    } else {
        console.warn('Ruta no encontrada:', seccion);
    }
}

/**
 * Cerrar menú con tecla Escape
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarMenuMovil();
    }
});

/**
 * Prevenir scroll del body en iOS cuando el menú está abierto
 */
document.addEventListener('touchmove', function(e) {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target)) {
            e.preventDefault();
        }
    }
}, { passive: false });
