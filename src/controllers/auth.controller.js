const MAX_INTENTOS = 3;
const TIEMPO_BLOQUEO = 5 * 60 * 1000; // 5 minutos

let bloqueado = false;
const intentos_login = {};

const getRegistro = (req, res) => {
    res.render('registro');
};

const getLogin = (req, res) => {
    res.render('login');
};

const postLogin = (req, res) => {
    res.redirect('/');
};

const postLoginIntento = (req, res) => {
    const email = req.body.email;
    if (!intentos_login[email]) intentos_login[email] = 0;

    intentos_login[email]++;

    console.log(intentos_login[email]);

    if (intentos_login[email] >= MAX_INTENTOS) {
        bloqueado = true;
        setTimeout(() => { 
            bloqueado = false;
        }, TIEMPO_BLOQUEO);
        intentos_login[email] = 0;
        return res.status(429).send();
    } else {
        return res.status(200).send();
    }
};

const postLoginCheckIntentos = (req, res) => {
    if (bloqueado) {
        return res.status(429).send();
    } else {
        return res.status(200).send();
    }
};

const postLogout = (req, res) => {
    intentos_login[req.body.email] = 0;
    res.status(200).send();
};

const getPlanes = (req, res, next) => {
    res.render("planes");
};

const getCorreoConfirmacion = (req, res, next) => {
    res.render("correo_confirmacion");
};

export {
    getPlanes,
    getCorreoConfirmacion,
    getRegistro,
    getLogin,
    postLogin,
    postLoginIntento,
    postLoginCheckIntentos,
    postLogout
};