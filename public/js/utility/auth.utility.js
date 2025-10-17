const passwordLargo = (password) => {
  return password.value.trim().length >= 8 ? true : false;
}

const correoExiste = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo.value.trim());
}

const mostrarError = (mensaje_error, condicional) => {
  condicional ? mensaje_error.style.display = 'block' : mensaje_error.style.display = 'none';
}

const togglePassword = (password_input, password_toggle) => {
  const is_password = password_input.type === "password";
  password_input.type = is_password ? "text" : "password";
  password_toggle.src = is_password ? "/img/eye-off.png" : "/img/eye.png";
}