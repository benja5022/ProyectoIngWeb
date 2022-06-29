import { Component, OnInit } from '@angular/core';
import { lectores } from 'src/app/models/lectores.model'
import { FormBuilder,FormGroup } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { ServiceClienteService } from 'src/app/servicios/service-cliente.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // public name: string = '';
  // public lastName: string = '';
  // public email: string = '';
  // public valorLectores: lectores[] = [];
  // public valorTotal: lectores | undefined;

  form:FormGroup = this.formulary.group({
    name:"",
    surname: "",
    email: "",
    pass:"",
    tipo:""
  });

  usuarios:Array<Usuarios>=[];

  constructor(private servicioCliente:ServiceClienteService, public formulary:FormBuilder, private httpClient:HttpClient) {

  }
  
  ngOnInit(): void {
  }

  public elementosSeleccionados(name: string,lastname: string,email: string):void{
    
    // this.valorTotal = {nombre:name, apellido:lastname, correo:email};
    
    // this.valorLectores.push(this.valorTotal);
    // console.log(this.valorLectores);
  }

  public submit(){

    console.log("Dentro, arriba españa")
    // let valor = {
    //   nombre:this.form.get("nombre")?.value,
    //   apellido:this.form.get("apellido")?.value,
    //   correo:this.form.get("correo")?.value,
    //   contrasenia:this.form.get("contrasenia")?.value
    // }

    let usuario:Usuarios = {    
        id:0,
        nombre:"",
        apellido:"",
        correo:"",
        contrasenia:"",
        tipo:1

    };

    let nombreCorreo = this.form.get("email")?.value
    // console.log(valor.correo)
    let bandera = false
    this.servicioCliente.revisarUsuario(nombreCorreo).subscribe(
      datos=> {
        if(datos != null){
          if(datos[0] == nombreCorreo){
            bandera = true
            console.log("El usuario ya existe");
          }
          else{
            this.agregarUsuario();
          }
        }
      });

    console.log(usuario.correo)

  }

  public agregarUsuario(){

    this.servicioCliente.agregarNuevoUsuario({
      id:0,
      nombre:this.form.get("name")?.value,
      apellido:this.form.get("surname")?.value,
      correo:this.form.get("email")?.value,
      contrasenia:this.form.get("pass")?.value,
      tipo:1
    }).subscribe( data=>{
        console.log("agregando usuario");
    });

  }
}
