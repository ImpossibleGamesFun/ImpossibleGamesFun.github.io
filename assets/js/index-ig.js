// Obtener una lista de todos los elementos de clase "h3"
const elements = document.querySelectorAll('.trans-show');
let animationFrameId = null;


// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para mostrar los elementos en el viewport
function showElementsOnScroll() {
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });

    // Volver a solicitar el próximo cuadro de animación
    animationFrameId = requestAnimationFrame(showElementsOnScroll);
}

function stopAnimation() {
    // Cancela la animación cuando no sea necesario
    cancelAnimationFrame(animationFrameId);
}

// Agregar un listener de scroll para comenzar la animación
window.addEventListener('scroll', showElementsOnScroll);

// Detener la animación cuando el usuario deja de desplazarse
window.addEventListener('scroll', stopAnimation);

// Mostrar elementos que estén en el viewport al cargar la página
showElementsOnScroll();