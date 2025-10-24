const getHistorial = (req, res) => {
    res.render('historial');
};

const postHistorial = (req, res) => {
    res.redirect('/historial');
};

const getCuenta = async (req, res, next) => {
    res.render('cuenta');
};

const postCuenta = (req, res) => {
    res.redirect('/cuenta');
};

export {
    getHistorial,
    postHistorial,
    getCuenta,
    postCuenta
};