import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {Session} from '../../class/session';
//import {sesion2} from '../../interfaces/sesion';
import { LoginUsuarioService } from 'src/app/servicios/login-usuario.service';


@Component({
  selector: 'app-sesion-screen',
  templateUrl: './sesion-screen.component.html',
  styleUrls: ['./sesion-screen.component.scss']
})

export class SesionScreenComponent implements OnInit {
   formGroup:FormGroup;
   mensaje:string="";
   nombre:string ="";
   //token:string="";
   //datos:Session[]=[];

  constructor(private form:FormBuilder ,private servicioUsuario:LoginUsuarioService) {
    this.formGroup=this.form.group({
      usuario:['',Validators.required],
      contrasenia:['',Validators.required]
     });
   }

  ngOnInit(): void {
    let datos = JSON.parse(localStorage.getItem('sitiomovil') || "{}");
    console.log(datos);
    if(datos !='{}'){
     if(datos && datos.usuario){
      window.location.href="/home"
     }
    }
  }
  

  validarlogin(){
    this.servicioUsuario.ValidarLogin(this.formGroup.get("usuario")?.value, this.formGroup.get("contrasenia")?.value).subscribe(datos=>{
      console.log(datos);
      if(datos.length==0){
            this.mensaje="Error contraseña o email, intente de nuevo";
            console.log(this.mensaje)
       }else{
        console.log(datos);
        localStorage.setItem('sitiomovil',JSON.stringify({"usuario":datos[0].correo,"id":datos[0].id}));
        localStorage.setItem('usuario',JSON.stringify({"nombre":datos[0].correo}));
        this.mensaje="logueado correctamente";
        window.location.href="/home"
       }
  });
}






}

    /*this.servicioUsuario.Token().subscribe(token=>{
      //this.token=token;
      this.servicioUsuario.ValidarLogin(this.formGroup.get("usuario")?.value, this.formGroup.get("contrasenia")?.value).subscribe(datos=>{
       console.log(datos);
       if(datos.length==0){
             this.mensaje="Error al iniciar sesion, correo o contraseña no existe, intente de nuevo";
        }else{
          localStorage.setItem('sitiomovil',JSON.stringify({"usuario":datos[0].correo,"id":datos[0].id}));
          //datos={token:datos[0].id,usuario:datos[0].correo_electronico};
           //this.storage.crearsession(datos);
           //window.location.href="/home";
           this.mensaje="inicio de sesion correctamente";
          console.log(datos);
          }});
 }*/


