const validaciones = require('../utility/auth.validaciones')

const getRegistro = (req, res) => {
    res.render('registro');
};

const postRegistro = (req, res, next) => {
    const { email, password } = req.body;

    if (!validaciones.correoExiste(email) || !validaciones.passwordLargo(password)) {
        const err = new Error('Datos inválidos');
        err.status = 400;
        next(err);
    } else {
        res.status(200);
        res.redirect('/planes');
    }
};

const getLogin = (req, res) => {
    res.render('login');
};

const postLogin = (req, res) => {
    res.redirect('/');
};

module.exports = {
    getRegistro,
    postRegistro,
    getLogin,
    postLogin
};