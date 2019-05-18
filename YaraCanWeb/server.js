//importando paquetes para el proyecto
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Se utilizara BodyParser para obtener datos de nuestras VISTAS vis method POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configurando el puerto de nuestro proyeto
const port = process.env.PORT || 6000;


app.use('/',function(req,res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.options("/*",function(req,res,next){
    res.sendStatus(200);
});


//Creando una variable que tendra la instancia del ENRUTADOR EXPRESS
const router = express.Router();

router.get('/',function(req,res){
    res.json({ message: "Bienvenido a la API Yara Can"});
});

const userRouter = require('./routes/user');
router.use('/user', userRouter);

//Rutas para neustra API
app.use('/api',router);

//Estableciendo conexion con MONGODB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yaracan');
mongoose.Promise = global.Promise;



//Iniciando el servidor en el puerto 5000
app.listen(port);
console.log('Conectando con el servidor ' + port);