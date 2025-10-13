const express = require('express');
const path = require('path');
const controller = require('../controllers/productos.controller')

const router = express.Router();

router.get('/producto/:id', controller.producto);

module.exports = router;