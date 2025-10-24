import express from 'express';
import path from 'path';
import { getProducto } from '../controllers/productos.controller.js';

const router = express.Router();

router.get('/producto/:id', getProducto);

export default router;