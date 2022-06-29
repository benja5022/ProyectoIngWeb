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
    contrasenia:"",
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

    let variable = this.form.get("email")?.value
    // console.log(valor.correo)

    this.servicioCliente.revisarUsuario(variable).subscribe(
      datos=> {
        console.log(datos);
        // for(let i = 0; i< datos.length ; i++){
          // if(datos.correo == valor.correo){
          //   console.log("El Usuario ya existe")
          //   usuario = datos[i]
          // }
          // this.usuarios.push(datos[i]);
        // }
        // console.log(datos);
      });

    console.log(usuario.correo)

  }
}
