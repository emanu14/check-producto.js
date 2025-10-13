const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mainRouter = require('./src/routes/main.router');
const productosRouter = require('./src/routes/productos.router');

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(mainRouter);
app.use(productosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))