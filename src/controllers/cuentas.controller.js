const getCuenta = (req, res) => {
    res.render('cuenta');
};

const postCuenta = (req, res) => {
    res.redirect('/cuenta');
};

const getHistorial = (req, res) => {
    res.render('historial');
};

const postHistorial = (req, res) => {
    res.redirect('/historial');
};

const getPlanes = (req, res) => {
    res.render('planes');
};

const postPlanes = (req, res) => {
    res.redirect('/');
};

module.exports = {
    getCuenta,
    postCuenta,
    getHistorial,
    postHistorial,
    getPlanes,
    postPlanes
};