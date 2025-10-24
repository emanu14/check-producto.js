import express from 'express';
import path from 'path';
import { getInicio, postInicio } from '../controllers/main.controller.js';

const router = express.Router();

router.get('/', getInicio);

router.post('/', postInicio);

export default router;