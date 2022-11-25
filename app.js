const express = require ('express');

const app = express ();


//Configuración de Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.send('Todo ok');
});
module.exports = app;