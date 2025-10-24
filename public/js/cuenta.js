import { auth, onAuthStateChanged } from "/js/firebase-config.js";
    
const token_holder = document.getElementById("token");
const container = document.getElementById("container");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const token = await user.getIdToken();
        token_holder.textContent = token;
        container.style.display = "block";
    } else {
        window.location.href = "/";
    }
});