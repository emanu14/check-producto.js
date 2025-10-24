const getProducto = (req, res) => {
    const {id} = req.params;
    res.render('producto', { id_producto: id });
};

export {
    getProducto
};