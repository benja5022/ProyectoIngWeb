import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { ServiceClienteService } from './../../servicios/service-cliente.service' ;
import { LoginUsuarioService } from 'src/app/servicios/login-usuario.service';
import {Usuarios} from '../../interfaces/usuarios'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mensaje:string="";
  usuario?:Usuarios;
  
  constructor(private form:FormBuilder ,private servicioUsuario:LoginUsuarioService) { 
   
  }

  ngOnInit(): void {
   
  }
  getUsuario(){
    this.usuario = JSON.parse(localStorage.getItem('usuario') || "");
    console.log(this.usuario);
  }
  cerrarsesion(){
    localStorage.removeItem('sitiomovil');
    window.location.href="/inicioSesion";
  }

}
