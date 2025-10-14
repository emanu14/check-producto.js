const express = require('express');
const layouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const path = require('path');
const mainRouter = require('./src/routes/main.router');
const productosRouter = require('./src/routes/productos.router');
const authRouter = require('./src/routes/auth.router');
const cuentasRouter = require('./src/routes/cuentas.router');

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(layouts);
app.set('layout', 'layouts/layout');

app.use(mainRouter);
app.use(productosRouter);
app.use(authRouter);
app.use(cuentasRouter);

app.use((req, res, next) => {
    const err = new Error('Página no encontrada');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).render('error', {
        status: err.status || 500,
        message: err.message || 'Error desconocido'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))