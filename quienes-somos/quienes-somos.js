/* =============================================
   QUIÉNES SOMOS - JavaScript
   Lógica específica de la página
   ============================================= */

/**
 * Acción al hacer clic en "Escríbenos"
 */
function irAContacto() {
    navegarA('contacto');
}

/**
 * Animación de entrada al cargar la página
 */
function animarEntrada() {
    document.body.style.opacity = '0';
    
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// Ejecutar animación al cargar
window.addEventListener('load', animarEntrada);
