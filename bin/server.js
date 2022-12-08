const http = require ('http');
const app = require('../app')

// Te recomendaria que mantengas toda la config del server en el mismo archivo
// De esa forma es mas facil debugear, en este caso me refiero a traer por ej lo que esta en app.js aca
// O bien, llevar esto mismo a ese file

const server = http.createServer(app);

server.listen(3000)
server.on('listening', () => {
    console.log( 'El server esta funcando en el server 3000');
         });
