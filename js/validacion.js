const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const email = document.getElementById("email").value;
const password1 = document.getElementById("password1").value;
const password2 = document.getElementById("password2").value;
const termsChecked = document.getElementById("terminos").checked;

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

if (password1 === password2) {
    // Mostrar alerta de éxito si las contraseñas coinciden
    showAlertSuccess();
} else {
    // Mostrar alerta de error si las contraseñas no coinciden
    showAlertError();
}
