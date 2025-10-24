import { auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "../firebase-config.js";

const passwordLargo = (password) => {
  return password.value.trim().length >= 8 ? true : false;
}

const correoExiste = (correo) => {
  return correo.value.trim().includes("@");
}

const mostrarError = (mensaje_error, condicional) => {
  condicional ? mensaje_error.style.display = 'block' : mensaje_error.style.display = 'none';
}

const togglePassword = (password_input, password_toggle) => {
  const is_password = password_input.type === "password";
  password_input.type = is_password ? "text" : "password";
  password_toggle.src = is_password ? "/img/eye-off.png" : "/img/eye.png";
}

const crearCuenta = async (correo, password) => {

    try {
        const credencial = await createUserWithEmailAndPassword(auth, correo, password);
        await sendEmailVerification(credencial.user);
        sessionStorage.setItem("correoUsuario", credencial.user.email);
        return 0;
        
    } catch(error) {
        if (error.code === 'auth/email-already-in-use') {
            return 1;
        } 
    }
}

const iniciarSesion = async (correo, password) => {
    try {
        const credencial = await signInWithEmailAndPassword(auth, correo, password);
        sessionStorage.setItem("correoUsuario", credencial.user.email);

        return 0;
        
    } catch(error) {

        if (error.code === "auth/invalid-email" || error.code === "auth/user-not-found") {
            return 1;

        } else if (error.code === "auth/wrong-password") {
            const response = await fetch("/login-intento", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: correo })
            });

            if (response.status === 429) {
                return 2;
            } else {
                return 3;
            }
        }
    }
}

const reloadIniciarSesion = async () => {
    const response = await fetch("/login-check-intentos", {method: "POST"});
    if (response.status === 429) {
        return 1;
    } else if (response.status === 200) {
        return 0;
    }
}

export {
    passwordLargo,
    correoExiste,
    mostrarError,
    togglePassword,
    crearCuenta,
    iniciarSesion,
    reloadIniciarSesion
};