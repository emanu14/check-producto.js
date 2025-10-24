import express from 'express';
import path from 'path';
import {
    getPlanes,
    getCorreoConfirmacion,
    getRegistro,
    getLogin,
    postLogin,
    postLoginIntento,
    postLoginCheckIntentos,
    postLogout
} from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/registro', getRegistro);

router.get('/login', getLogin);

router.post('/login', postLogin);

router.post('/login-intento', postLoginIntento);

router.post('/login-check-intentos', postLoginCheckIntentos);

router.post('/logout', postLogout);

router.get('/correo_confirmacion', getCorreoConfirmacion);

router.get('/planes', getPlanes);

export default router;