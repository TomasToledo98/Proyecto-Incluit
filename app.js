const express = require ('express');

const app = express ();

// Recomiendo mantener siempre todo el codigo en el mismo idioma
// Es mas facil seguir el hilo de lo que esta pasando dentro, 
// Y a la vez nos aseguramos que la mayoria de los developers puedan leer todo

//Configuración de Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.send('Todo ok');
});
module.exports = app;