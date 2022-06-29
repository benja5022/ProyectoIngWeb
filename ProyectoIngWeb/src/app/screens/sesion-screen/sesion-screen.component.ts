import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { ServiceClienteService } from './../../servicios/service-cliente.service' ;

@Component({
  selector: 'app-sesion-screen',
  templateUrl: './sesion-screen.component.html',
  styleUrls: ['./sesion-screen.component.scss']
})

export class SesionScreenComponent implements OnInit {
  
   formGroup:FormGroup;
   mensaje:string="";

  constructor(private form:FormBuilder ,private servicioCliente:ServiceClienteService,) {
        this.formGroup=this.form.group({
        usuario:['',Validators.required],
        contrasenia:['',Validators.required]
       });
   }

  ngOnInit(): void {
   let datos = JSON.parse(localStorage.getItem('sitiomovil') || 'null');
   if(datos != 'null'){
    if(datos && datos.usuario){
      window.location.href="/home"
    }
   }
  }
  
  validarlogin(){
      this.servicioCliente.ValidarLogin(this.formGroup.get("usuario")?.value, this.formGroup.get("contrasenia")?.value).subscribe(datos=>{
      console.log(datos);

      if(datos.length==0){
            this.mensaje="Error contraseña o email, intente de nuevo";
       }else{
        console.log(datos);
        localStorage.setItem('sitiomovil',JSON.stringify({"usuario":datos[0].correo,"id":datos[0].id}));
        this.mensaje="logueado correctamente";
        //datos={token:datos[0].id,usuario:datos[0].correo_electronico};
        //this.storage.CrearSession(datos);
        window.location.href="/home";
       }
  })
  };
  
}