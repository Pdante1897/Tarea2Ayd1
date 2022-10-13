const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

var endpoints = require('./routes/endpoints.route')

app.use(bodyParser.json({limit:'50mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'50mb', extended:true}))
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Backend Funciona');
})

app.use('/tarea2', endpoints);

app.listen(4000, () => {
    console.log('Funcionando en puerto 4000');
});