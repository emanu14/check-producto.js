const express = require('express');
const path = require('path');
const controller = require('../controllers/main.controller')

const router = express.Router();

router.get('/', controller.index);

module.exports = router;