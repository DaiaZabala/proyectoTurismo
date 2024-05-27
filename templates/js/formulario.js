function validarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const motivo = document.getElementById('motivo').value;
    const lugar = document.querySelector('input[name="lugar"]:checked');
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !motivo || !lugar || !mensaje) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    } else{
         window.location.href ="../paginas/gracias.html"; // Redirigir a gracias.html
    // alert("Formulario enviado correctamente.");
    return true;
    }

   
}

document.querySelector('form').addEventListener('submit', validarFormulario);
