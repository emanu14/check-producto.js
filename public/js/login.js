const password_input = document.getElementById("password");
const password_toggle = document.getElementById("toggle-password");

password_toggle.addEventListener("click", () => {
    togglePassword(password_input, password_toggle);
});
