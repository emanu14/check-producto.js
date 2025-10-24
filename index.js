import express from 'express';
import layouts from 'express-ejs-layouts';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import path from 'path';
import mainRouter from './src/routes/main.router.js';
import productosRouter from './src/routes/productos.router.js';
import authRouter from './src/routes/auth.router.js';
import cuentasRouter from './src/routes/cuentas.router.js';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(layouts);
app.set('layout', 'layouts/layout');

app.use(mainRouter);
app.use(productosRouter);
app.use(authRouter);
app.use(cuentasRouter);

app.use("/test", (req, res) => {
    res.render('test');
});

app.use((req, res, next) => {
    const err = new Error('Página no encontrada');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    // console.error(err.stack);
    res.status(err.status || 500).render('error', {
        status: err.status || 500,
        message: err.message || 'Error desconocido'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));