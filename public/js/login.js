import {
    mostrarError,
    togglePassword,
    iniciarSesion,
    reloadIniciarSesion
} from './helper/auth.helper.js';

const container = document.getElementById("container");
const correo_input = document.getElementById("email");
const mensaje_error_correo_desconocido = document.getElementById('mensaje-error-correo-desconocido');
const mensaje_error_password_incorrecto = document.getElementById('mensaje-error-password-incorrecto');
const mensaje_error_limite_intentos = document.getElementById('mensaje-error-limite-intentos');
const password_input = document.getElementById("password");
const password_toggle = document.getElementById("toggle-password");
const boton_enviar = document.getElementById('boton-enviar');

password_toggle.addEventListener("click", () => {
    togglePassword(password_input, password_toggle);
});

boton_enviar.addEventListener("click", async (event) => {

    event.preventDefault();

    const status = await iniciarSesion(
        correo_input.value.trim(), 
        password_input.value.trim()
    );

    if (status == 0) {
        window.location.href = "/";
    } else if (status == 1) {
        mostrarError(mensaje_error_correo_desconocido, true);
    } else if (status == 2) {
        mostrarError(mensaje_error_password_incorrecto, false);
        mostrarError(mensaje_error_limite_intentos, true);
        boton_enviar.disabled = true;
    } else if (status == 3) {
        mostrarError(mensaje_error_password_incorrecto, true);
        mostrarError(mensaje_error_correo_desconocido, false);
    }
});

document.addEventListener("DOMContentLoaded", async () => {

    const status = await reloadIniciarSesion();

    if (status == 0) {
        mostrarError(mensaje_error_limite_intentos, false);
        boton_enviar.disabled = false;
    } else if (status == 1) {
        mostrarError(mensaje_error_limite_intentos, true);
        boton_enviar.disabled = true;
    }

    container.style.display = "block";
});