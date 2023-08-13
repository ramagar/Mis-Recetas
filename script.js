document.addEventListener('DOMContentLoaded', function () {
    const enlacesRecetas = document.querySelectorAll('.receta-enlace');

    enlacesRecetas.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();

            const receta = this.getAttribute('data-receta');
            mostrarReceta(receta);
        });
    });

    function mostrarReceta(receta) {
        // Ocultar todas las recetas
        const recetas = document.querySelectorAll('.receta');
        recetas.forEach(receta => {
            receta.style.display = 'none';
        });

        // Mostrar la receta seleccionada
        const recetaSeleccionada = document.querySelector(`.${receta}`);
        recetaSeleccionada.style.display = 'block';
    }
});
