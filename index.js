const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//creamos el servidor
const app = express();

//conectamos la base de datos
conectarDB();
app.use(cors());
app.use(express.json({ extended: true }));
app.use('/api/productos', require('./routes/producto'));



app.listen(4000, () => {    
    console.log("Server is running on port 4000")
 });