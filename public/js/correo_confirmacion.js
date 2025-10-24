import { auth, onAuthStateChanged } from "/js/firebase-config.js";

const container = document.getElementById("container");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        container.style.display = "block";
    } else {
        window.location.href = "/";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const correo_placeholder = document.getElementById("correo-placeholder");
    correo_placeholder.textContent = sessionStorage.getItem("correoUsuario");
});

async function verificarCorreo() {
    const user = auth.currentUser;
    if (user) {
        await user.reload();
        if (user.emailVerified) {
            window.location.href = "/planes";
        }
    }
}
setInterval(verificarCorreo, 1000);