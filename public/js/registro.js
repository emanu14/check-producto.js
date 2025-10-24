import {
    passwordLargo,
    correoExiste,
    mostrarError,
    togglePassword,
    crearCuenta
} from './helper/auth.helper.js';

let correo_existe = false;
let password_largo = false;

const form_registro = document.getElementById("registro-form");
const correo_input = document.getElementById("email");
const mensaje_error_correo_arroba = document.getElementById('mensaje-error-correo-arroba');
const mensaje_error_password_length = document.getElementById('mensaje-error-password-length');
const mensaje_error_correo_usado = document.getElementById('mensaje-error-correo-usado');
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

boton_enviar.addEventListener("click", async (event) => {
    
    event.preventDefault();

    const status = await crearCuenta(
        correo_input.value.trim(), 
        password_input.value.trim()
    );

    if (status == 0) {
        window.location.href = "/correo_confirmacion";
    } else if (status == 1) {
        mostrarError(mensaje_error_correo_usado, true);
    }
});