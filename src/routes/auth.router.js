const express = require('express');
const path = require('path');
const controller = require('../controllers/auth.controller')

const router = express.Router();

router.get('/registro', controller.getRegistro);

router.post('/registro', controller.postRegistro);

router.get('/login', controller.getLogin);

router.post('/login', controller.postLogin);

module.exports = router;