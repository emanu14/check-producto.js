const getInicio = (req, res) => {
    res.render('inicio');
};

const postInicio = (req, res) => {
    const {id} = req.body;
    res.redirect('/producto/{id}');
};

export {
    getInicio,
    postInicio
};