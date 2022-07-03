"use strict";
// Con express se pueden acceder a metodos como get y post. nos sirve para crear el api rest
// con la libreria mysql se conecta a la base de datos 
// cuando se trabaja con angular se instala "npm i --save-dev @types/node" automaticamente
// instalar express, mysql
Object.defineProperty(exports, "__esModule", { value: true });
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
//const usuario = "prueba1";
//inicio seguro que genera un token cifrado de texto plano donde se guarda la clave
//const jwt = require("jsonwebtoken");
//codigo o clave donde se guarda
//const token = require("./config");
// configuración de la conexion
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    port: 3306,
    password: '1234',
    database: 'procean'
});
connection.connect(function (error, results, fields) {
    // si error es true, falló la conexión con la base de datos.
    if (error) {
        console.log("falla");
        throw error;
    }
    console.log("todo Bien");
});
aplicacion.use(cors());
aplicacion.use(bodyParser.urlencoded({ extended: false }));
//metodos CRUD , Create==post, READ=GET, UPDATE=PU, DELETE=DELETE
aplicacion.get('/donar', (req, res) => {
    // query -> es un metodo para acceder a las consultas de la base de datos
    connection.query("SELECT * FROM donaciones", (requirement, response) => {
        // console.log(response);
        //res.send(response);
        res.status(200).send(response);
    });
});
// CRUD de DONAR
aplicacion.post('/donar', bodyParser.json(), (req, res) => {
    // nombre,correo,donacion,apellido es el id del formulario (campo) "formControlName='nombre'"
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let apellido = req.body.apellido;
    let monto = req.body.monto;
    console.log("Correcto: " + nombre + " " + correo);
    connection.query("INSERT INTO `donaciones` (nombre,apellido,correo,monto) VALUES ('" + nombre + "','" + apellido + "','" + correo + "','" + monto + "')", (req1, res1) => {
        //res.status(201).send("Donante Creado");
        res.send(JSON.stringify(`formulario creado ${res1.insertId})`));
        // console.log(res1);
    });
});
aplicacion.put('/donar/:id', bodyParser.json(), (req, res) => {
    let id = req.params.id;
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let apellido = req.body.apellido;
    let monto = req.body.monto;
    console.log("`nombre` ='" + nombre + "',`apellido`='" + apellido + "',`correo`='" + correo + "',`monto`=" + monto);
    connection.query("UPDATE `donaciones` SET `nombre` ='" + nombre + "', `apellido`='" + apellido + "',`correo`='" + correo + "',`monto`=" + monto + " WHERE id=" + id + "", (req1, res1) => {
        console.log("colo Colo");
        res.status(200).send("Usuario Actualizado");
    });
});
aplicacion.delete('/donar/:id', bodyParser.json(), (req, res) => {
    let id = req.params.id;
    connection.query("DELETE FROM `donaciones` WHERE id=?", id, (req1, res1) => {
        res.status(200).send("Usuario Eliminado");
    });
});
// CRUD de USUARIOS
aplicacion.get('/unete/:correo', bodyParser.json(), (req, res) => {
    let email = req.params.correo;
    connection.query("SELECT `correo` FROM `usuarios` WHERE `correo` = ?", email, (req1, res1) => {
        res.status(200).send(res1);
    });
});
aplicacion.post('/unete', bodyParser.json(), (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.correo;
    let contrasenia = req.body.contrasenia;
    console.log(nombre + " " + apellido + " " + email + " " + contrasenia);
    connection.query("INSERT INTO `usuarios` (nombre,apellido,correo,contrasenia) values (?,?,?,md5(?))", [nombre, apellido, email, contrasenia], (req1, res1) => {
        res.status(200).send(res1);
    });
});
// Inicio de sesion Mati
//crear una ruta segura
/*const Modoseguro = express.Router();
Modoseguro.use((req:any,res:any,next:any)=>{
   
    const token = req.headers["access-token"];
    console.log(token);

    jwt.verify(token, token.token, (err:any,decoded:any)=>{
        if(err){
            return res.json("token invalido");
        }else{
            req.decoded = decoded;
            req.authenticated = true;
            next();
        }
    })
})*/
//la llave
/*aplicacion.get('/token',(req:any,res:any)=>{
    jwt.sign(
        {exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'bar'}, token.token,function(error:any,token:any){
        console.log(token);
        res.json(token);
    });
});*/
//inicio sesion seguro
aplicacion.get('/login', (req, res) => {
    const usuario = req.query.usuario;
    const contrasenia = req.query.contrasenia;
    connection.query("select id,correo from usuarios where correo=? and contrasenia=md5(?)", [usuario, contrasenia], function (error, resultados, fields) {
        if (error) {
            throw (error);
        }
        else {
            res.send(resultados);
        }
    });
    /*const usuario= req.query.usuario;
    const contrasenia = req.query.contrasenia;
    connection.query("select id,correo from usuarios where correo=? and contrasenia=md5(?)",[usuario,contrasenia],function(error:any,resultados:any,fields:any){
      if(error){
          throw(error);
      }else{
          res.send(resultados);
      }
    });*/
});
// OTROS
// 
// 
// 
// 
// 
aplicacion.delete('/eliminarUsuario', (req, res) => {
    let id = req.body.id;
    connection.query("DELETE FROM `usuarios` WHERE id=?", id, (req1, res1) => {
        res.status(200).send("Usuario Eliminado");
    });
});
// 2da forma
aplicacion.put('/modificarUsuarios2', (req, res) => {
    let id = req.body.id;
    let nombre = req.body.nombre;
    connection.query("UPDATE `usuarios` SET nombre=? WHERE id=?", [nombre, id], (req1, res1) => {
        res.status(200).send("Usuario Actualizado");
    });
});
aplicacion.get('/usuarios/:id', bodyParser.json(), (req, res) => {
    let id = req.params.id; // params toma el id del link
    console.log("El id es: ", id);
    // query -> es un metodo para acceder a las consultas de la base de datos
    connection.query("select * from usuarios where usuarios.id = ?", id, (requirement, response) => {
        //console.log(response);
        //res.send(response);
        res.status(200).send(response);
    });
});
aplicacion.get('/', (req, res) => {
    res.send('Hola mundo2!');
});
// aplicacion.get('/donar/:id', (req:any, res:any) => {
//     let id=req.params.id
//     connection.query("SELECT * FROM donaciones WHERE id=?",id, (requirement:any,response:any)=>
//     {
//         res.status(200).send(response);
//     });
// });
aplicacion.listen(puerto, () => {
    console.log(`Colo Colo lo más grande servidor escuchando localhost:${puerto}`);
});
