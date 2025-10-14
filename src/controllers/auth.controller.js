const getRegistro = (req, res) => {
    res.render('registro');
};

const postRegistro = (req, res) => {
    res.redirect('/planes');
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