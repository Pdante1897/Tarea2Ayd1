var express = require('express')
var controller = require('../controllers/endpoints.controller');
const app = express();
app.use(express.json());

app.post('/iniciarSesion', controller.inicioSesion);
app.post('/registroEstudiante', controller.registrarEstudiante);
app.post('/asignar', controller.asignacion);

module.exports = app;