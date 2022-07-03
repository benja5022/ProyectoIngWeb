import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginUsuarioService } from 'src/app/servicios/login-usuario.service';
import {Usuarios} from '../../interfaces/usuarios'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mensaje:string="";
  correo?:Usuarios;
  correo2:string="";
  conexion:boolean=false;
  cierre:boolean = false;


  constructor(private form:FormBuilder ,private servicioUsuario:LoginUsuarioService) { 
   
  }

  ngOnInit(): void {
   
  }
  
  usuariologueado(){
    return this.correo = JSON.parse(localStorage.getItem("usuario" ) || 'null');
  }

  tomarusuariologedo(){
    const usuario2 = this.usuariologueado();
    //console.log(usuario2)
    if(usuario2 != null){
      return this.correo2 = usuario2.nombre;
    }else{
      return this.mensaje = "No iniciado";
    }
  }

  conexioncorrecta(){
    //console.log(this.conexion);
    let datos = JSON.parse(localStorage.getItem('sitiomovil') || 'null');
    //console.log(datos);
    if(datos == null){
      return this.conexion = false;
    }else{
      return this.conexion = true;
    }
  }
     
  cerrarsesion(){
    localStorage.removeItem('sitiomovil');
    localStorage.removeItem('usuario');
    window.location.href="/inicioSesion";
  }
 

}
