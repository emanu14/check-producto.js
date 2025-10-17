let correo_existe = false;
let password_largo = false;

const form_registro = document.getElementById("registro-form");
const correo_input = document.getElementById("email");
const mensaje_error_correo_arroba = document.getElementById('mensaje-error-correo-arroba');
const mensaje_error_password_length = document.getElementById('mensaje-error-password-length');
const password_input = document.getElementById("password");
const password_toggle = document.getElementById("toggle-password");
const boton_enviar = document.getElementById('boton-enviar');

correo_input.addEventListener('input', () => {
    correo_existe = correoExiste(correo_input);
    mostrarError(mensaje_error_correo_arroba, !correo_existe);
    correo_existe && password_largo ? boton_enviar.disabled = false : boton_enviar.disabled = true;
});

password_input.addEventListener('input', () => {
    password_largo = passwordLargo(password_input);
    mostrarError(mensaje_error_password_length, !password_largo);
    correo_existe && password_largo ? boton_enviar.disabled = false : boton_enviar.disabled = true;
});

password_toggle.addEventListener("click", () => {
    togglePassword(password_input, password_toggle);
});
