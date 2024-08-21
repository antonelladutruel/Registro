
document.getElementById("regBtn").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value.trim();
    const password2 = document.getElementById("password2").value.trim();
    const terms = document.getElementById("terminos").checked;

    if ([nombre, apellido, email, password1, password2].includes("") || !terms) {
        showAlertError();
        return;
    }

    if (password1 !== password2 || password1.length < 6) {
        showAlertError();
        return;
    }
else
    showAlertSuccess();
});
=======
if (password1 === password2) {
    // Mostrar alerta de éxito si las contraseñas coinciden
    showAlertSuccess();
} else {
    // Mostrar alerta de error si las contraseñas no coinciden
    showAlertError();
}