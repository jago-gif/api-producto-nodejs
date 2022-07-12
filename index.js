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


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {    
    console.log("Server is running on port " + PORT);
 });