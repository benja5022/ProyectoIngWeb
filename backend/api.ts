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
        throw error;
        
    }

    console.log("todo Bien");
    
});

aplicacion.use(cors());
aplicacion.use(bodyParser.urlencoded({extended: false}));

//metodos CRUD , Create==post, READ=GET, UPDATE=PU, DELETE=DELETE

// uno de los metodos de una api rest, get
// req-> peticion y res -> respuesta
aplicacion.get('/', (req:any, res:any) => {
  res.send('Hola mundo2!');
});

aplicacion.get('/donar', (req:any, res:any) => {
    // query -> es un metodo para acceder a las consultas de la base de datos
    connection.query("SELECT * FROM donaciones", (requirement:any,response:any)=>
    {
        console.log(response);
        //res.send(response);
        res.status(200).send(response);
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

// inserción de datos
// los parametros vienen a través de un formulario en los corchetes ("[]")
// no se utiliza req.params porque los datos on se encuentran en la url, está dentro del body
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
            console.log(res1);
    });

});

// editar actualizar
aplicacion.put('/donar',bodyParser.json() ,(req:any, res:any) => {
    let id= req.body.id;
    let nombre= req.body.nombre;
    let correo = req.body.correo;
    let apellido = req.body.apellido;
    let monto = req.body.monto;

    console.log(id + " "+nombre+ " "+correo+ " "+apellido+" "+monto);

    // connection.query("UPDATE `usuarios` SET nombre=?, apellido=?, correo=?, monto=? WHERE id=?",[nombre,apellido, correo,monto,id],(req1:any,res1:any)=>{
    //         res.status(200).send("Usuario Actualizado");
    // });

});

// 2da forma
aplicacion.put('/modificarUsuarios2',(req:any, res:any) => {

    let id = req.body.id;
    let nombre=req.body.nombre;
    connection.query("UPDATE `usuarios` SET nombre=? WHERE id=?",[nombre,id],(req1:any,res1:any)=>{
        res.status(200).send("Usuario Actualizado");
    });
});

aplicacion.delete('/eliminarUsuario', (req:any,res:any)=> {
    let id = req.body.id;
    connection.query("DELETE FROM `usuarios` WHERE id=?",id,(req1:any,res1:any)=>{
        res.status(200).send("Usuario Eliminado");
    });
});



aplicacion.listen(puerto,()=>{
    console.log(`Colo Colo lo más grande servidor escuchando localhost:${puerto}`);
});

