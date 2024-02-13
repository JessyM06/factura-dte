document.addEventListener('DOMContentLoaded', function() {
    // Verificar si la página solicitada existe
    checkPageExists();
});

function checkPageExists() {
    // Obtener la URL actual
    var currentURL = window.location.href;

    // Hacer una solicitud HEAD para verificar la existencia de la página
    fetch(currentURL, { method: 'HEAD' })
        .then(response => {
            if (!response.ok) {
                // Si la respuesta no es exitosa (404 Not Found), redirigir a la página 404
                window.location.href = '../HTML/error.html'; // Asegúrate de tener una página 404.html en tu servidor
            }
        })
        .catch(error => {
            console.error('Error al verificar la existencia de la página:', error);
        });
}