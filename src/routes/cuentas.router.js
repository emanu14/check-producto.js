import express from 'express';
import path from 'path';
import {
    getHistorial,
    postHistorial,
    getCuenta,
    postCuenta
} from '../controllers/cuentas.controller.js';

const router = express.Router();

router.get('/cuenta', getCuenta);

router.post('/cuenta', postCuenta);

router.get('/historial', getHistorial);

router.post('/historial', postHistorial);

export default router;