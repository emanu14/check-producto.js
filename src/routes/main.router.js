const express = require('express');
const path = require('path');
const controller = require('../controllers/main.controller')

const router = express.Router();

router.get('/', controller.getInicio);

router.post('/', controller.postInicio);

module.exports = router;