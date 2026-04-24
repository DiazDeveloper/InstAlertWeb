document.addEventListener('DOMContentLoaded', () => {
    const btnZonas = document.getElementById('btnZonas');

    btnZonas.addEventListener('click', () => {
        alert("Cargando mapa de zonas de riesgo en tiempo real...");
    });

    // Efecto simple de hover en los puntos del mapa
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('mouseover', () => {
            dot.style.transform = 'scale(1.5)';
            dot.style.transition = '0.2s';
        });
        dot.addEventListener('mouseout', () => {
            dot.style.transform = 'scale(1)';
        });
    });
});