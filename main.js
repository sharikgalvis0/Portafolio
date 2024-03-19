document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    var formulario = document.querySelector('form');

    // Agregar un evento de escucha para el envío del formulario
    formulario.addEventListener('submit', function(event) {
        // Obtener los valores de los campos
        var nombre = document.getElementById('nombre').value.trim();
        var email = document.getElementById('email').value.trim();
        var mensaje = document.getElementById('mensaje').value.trim();

        // Validar que los campos no estén vacíos
        if (nombre === '' || email === '' || mensaje === '') {
            // Mostrar una alerta
            alert('Por favor complete todos los campos.');
            // Evitar que el formulario se envíe
            event.preventDefault();
        }
    });
});


$(document).ready(function() {
    $('.nav-link').hover(function() {
        $(this).css('color', '#4a2617'); 
    }, function() {
        $(this).css('color', '#fff');
    });
});
