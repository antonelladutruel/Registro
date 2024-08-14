function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

if (password1 === password2) {
    // Mostrar alerta de éxito si las contraseñas coinciden
    alertSuccess.classList.add('show');
} else {
    // Mostrar alerta de error si las contraseñas no coinciden
    alertDanger.classList.add('show');
}
}
