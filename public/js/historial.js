import { auth, onAuthStateChanged } from "/js/firebase-config.js";

const container = document.getElementById("container");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        container.style.display = "block";
    } else {
        window.location.href = "/";
    }
});