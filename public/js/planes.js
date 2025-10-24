import { auth, onAuthStateChanged } from "/js/firebase-config.js";

const container = document.getElementById("container");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        container.style.display = "block";
    } else {
        window.location.href = "/";
    }
});

let planSeleccionado = null;

const botones = document.querySelectorAll(".plan");
const btnContinuar = document.getElementById('continuar');

botones.forEach(plan => {
    plan.addEventListener("click", () => {
        botones.forEach(b => b.classList.remove("seleccionado"));
        plan.classList.add("seleccionado");
        planSeleccionado = plan.dataset.plan;
        btnContinuar.disabled = false;
    });
});

btnContinuar.addEventListener('click', () => {
    if (!planSeleccionado) return;
    window.location.href = "/";
});