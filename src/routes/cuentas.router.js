const express = require('express');
const path = require('path');
const controller = require('../controllers/cuentas.controller')

const router = express.Router();

router.get('/planes', controller.getPlanes);

router.post('/planes', controller.postPlanes);

router.get('/cuenta', controller.getCuenta);

router.post('/cuenta', controller.postCuenta);

router.get('/historial', controller.getHistorial);

router.post('/historial', controller.postHistorial);

module.exports = router;