const producto = (req, res) => {
    const {id} = req.params;
    res.render('producto', { id_producto: id });
};

module.exports = {
    producto,
};