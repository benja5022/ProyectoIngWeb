// Con express se pueden acceder a metodos como get y post. nos sirve para crear el api rest
// con la libreria mysql se conecta a la base de datos 
// cuando se trabaja con angular se instala "npm i --save-dev @types/node" automaticamente
// instalar express, mysql

const express = require('express');

const mysql = require('mysql');

const pg = require('pg');

const cors = require('cors');



// body parser analiza y modifica el formato original cuando se obtienen los datos de un formulario (o JSON)
// para poder subirlo a la base de datos
const bodyParser = require('body-parser');

const aplicacion = express();

// const servidor="127.0.0.1";
const puerto = 3002;


// configuración de la conexion

let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    port     : 3306,
    password : '',
    database : 'procean'
});

connection.connect(function(error:any, results:any, fields:any){
    // si error es true, falló la conexión con la base de datos.
    if(error){ 
        console.log("falla");
        throw error;}

    console.log("todo Bien");
});
aplicacion.use(cors());
aplicacion.use(bodyParser.urlencoded({extended: false}));

//metodos CRUD , Create==post, READ=GET, UPDATE=PU, DELETE=DELETE

aplicacion.get('/donar', (req:any, res:any) => {
    // query -> es un metodo para acceder a las consultas de la base de datos
    connection.query("SELECT * FROM donaciones", (requirement:any,response:any)=>
    {
        // console.log(response);
        //res.send(response);
        res.status(200).send(response);
    });
});


// CRUD de DONAR

aplicacion.post('/donar',bodyParser.json() ,(req:any, res:any) => {
    // nombre,correo,donacion,apellido es el id del formulario (campo) "formControlName='nombre'"
        let nombre= req.body.nombre;
        let correo = req.body.correo;
        let apellido = req.body.apellido;
        let monto = req.body.monto;

        console.log("Correcto: "+nombre +" " +correo);

        connection.query("INSERT INTO `donaciones` (nombre,apellido,correo,monto) VALUES ('"+nombre+"','"+apellido+"','"+correo+"','"+monto+"')" ,(req1:any,res1:any)=>{
            //res.status(201).send("Donante Creado");
            res.send(JSON.stringify(`formulario creado ${res1.insertId})`));
            // console.log(res1);
    });

});

aplicacion.put('/donar/:id',bodyParser.json() ,(req:any, res:any) => {
    let id=req.params.id;
    let nombre= req.body.nombre;
    let correo = req.body.correo;
    let apellido = req.body.apellido;
    let monto = req.body.monto;

    console.log("`nombre` ='"+nombre+"',`apellido`='"+apellido+"',`correo`='"+correo+"',`monto`="+monto);

    connection.query("UPDATE `donaciones` SET `nombre` ='"+nombre+"', `apellido`='"+apellido+"',`correo`='"+correo+"',`monto`="+monto+" WHERE id="+id+"",(req1:any,res1:any)=>{
        console.log("colo Colo");
        res.status(200).send("Usuario Actualizado");
    });

});

aplicacion.delete('/donar/:id',bodyParser.json() ,(req:any,res:any)=> {
    let id=req.params.id
    connection.query("DELETE FROM `donaciones` WHERE id=?",id,(req1:any,res1:any)=>{
        res.status(200).send("Usuario Eliminado");
    });
});


// CRUD de USUARIOS

aplicacion.get('/unete/:correo',bodyParser.json() ,(req:any,res:any)=> {
    let email=req.params.correo;
    connection.query("SELECT `correo` FROM `usuarios` WHERE `correo` = ?",email,(req1:any,res1:any)=>{
        res.status(200).send(res1);
    });
});


// OTROS
// 
// 
// 
// 
// 
aplicacion.delete('/eliminarUsuario', (req:any,res:any)=> {
    let id = req.body.id;
    connection.query("DELETE FROM `usuarios` WHERE id=?",id,(req1:any,res1:any)=>{
        res.status(200).send("Usuario Eliminado");
    });
});

// 2da forma
aplicacion.put('/modificarUsuarios2',(req:any, res:any) => {

    let id = req.body.id;
    let nombre=req.body.nombre;
    connection.query("UPDATE `usuarios` SET nombre=? WHERE id=?",[nombre,id],(req1:any,res1:any)=>{
        res.status(200).send("Usuario Actualizado");
    });
});

aplicacion.get('/usuarios/:id',bodyParser.json(), (req:any, res:any) => {
    let id=req.params.id; // params toma el id del link
    console.log("El id es: ", id);
    // query -> es un metodo para acceder a las consultas de la base de datos
    connection.query("select * from usuarios where usuarios.id = ?",id, (requirement:any,response:any)=>
    {
        //console.log(response);
        //res.send(response);
        res.status(200).send(response);
    });
});

aplicacion.get('/', (req:any, res:any) => {
  res.send('Hola mundo2!');
});

// aplicacion.get('/donar/:id', (req:any, res:any) => {
//     let id=req.params.id
//     connection.query("SELECT * FROM donaciones WHERE id=?",id, (requirement:any,response:any)=>
//     {
//         res.status(200).send(response);
//     });
// });

aplicacion.listen(puerto,()=>{
    console.log(`Colo Colo lo más grande servidor escuchando localhost:${puerto}`);
});

