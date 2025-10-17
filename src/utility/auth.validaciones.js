const passwordLargo = (password) => {
  return password.trim().length >= 8 ? true : false;
}

const correoExiste = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo.trim());
}

module.exports = {
    passwordLargo,
    correoExiste
};