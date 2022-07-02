import { Component, OnInit } from '@angular/core';
import { donadores2 } from 'src/app/models/donadores.model';
import listaDePersonas from 'src/assets/json/cuki.json' ;
import  { ServiceClienteService } from './../../servicios/service-cliente.service' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Donaciones} from './../../interfaces/donaciones';
import { FormBuilder,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-donar-screen',
  templateUrl: './donar-screen.component.html',
  styleUrls: ['./donar-screen.component.scss']
})


export class DonarScreenComponent implements OnInit {

  // coleccion: any = listaDePersonas;
  // public donadores: donadores2 [ ] = [ ];
  formulario:FormGroup = this.formu.group({
    id:0,
    nombre:"",
    apellido: "",
    correo: "",
    monto: 0.0 
  });
  public SeleccionDonador: Donaciones={
    id:0,
    nombre:"",
    apellido: "",
    correo: "",
    monto: 0
  };

  public nombre: string = '';
  public apellido: string = '';
  public correo: string = '';
  public monto: number = 0;
  buttonType:string = "";

  donaciones:Array<Donaciones>=[];



  //datos usando js 
  constructor(private servicioCliente:ServiceClienteService, public formu:FormBuilder, private httpClient:HttpClient) {
    // this.formulario 

  //    this.donadores = []
  //    let i: number;
  //    for(i = 0; i < this.coleccion.personas.length; i = i+1){
  //      this.donadores.push({id: this.coleccion.personas[i]["id"],nombre: this.coleccion.personas[i]["nombre"] , rut:this.coleccion.personas[i]["rut"], dinero:this.coleccion.personas[i]["dinero"]});
  //    }
  //  this.SeleccionDonador = null;
  }

  ngOnInit(): void {

    /*if(this.storage.obtenerusuarioactual() == null) {
      window.location.href="/inicioSesion"
    } */
    let datos2 = JSON.parse(localStorage.getItem('sitiomovil') || 'null');
    console.log(datos2);
    if(datos2 == null){
      window.location.href="/inicioSesion"
    }

    this.servicioCliente.consultarDonador().subscribe(
      datos=> {
        for(let i = 0; i< datos.length; i++){
          this.donaciones.push(datos[i]);
        }
        console.log(datos);
      });

  }


  public Seleccionardonador(donador: any){
    this.SeleccionDonador = donador;
    console.log(this.SeleccionDonador)
  }

  public AgregarDonador(){
    
    this.servicioCliente.agregarDonador({
      id:0,
      nombre:this.formulario.get("nombre")?.value,
      apellido: this.formulario.get("apellido")?.value,
      correo: this.formulario.get("correo")?.value,
      monto: parseFloat(this.formulario.get("monto")?.value)  
    }).subscribe(respuesta=>{
      console.log(respuesta);
    });

    // let donador = {
    //   id: this.donadores.length+1,
    //   nombre: nombre,
    //   rut: rut,
    //   dinero: donar
    // }
    //  this.donadores.push(donador)
    //  console.log(this.donadores)
  }

  onSubmit(boton:string):void{
    if(boton == "submit"){
      this.AgregarDonador();
    }

    if(boton == "update"){
      this.Modificardonador();
    }

    if(boton == "delete"){
      this.EliminarDonador();
    }
    
  }

  public EliminarDonador(){

    this.servicioCliente.eliminarDonador(this.SeleccionDonador.id).subscribe(data =>{
      console.log("Respuesta eliminar: " + data);
    });

    // for(let i = 0; i< this.donadores.length;i++){
    //   if(this.donadores[i].id == this.SeleccionDonador.id){
    //     this.donadores.splice(this.donadores[i].id-1,1)
    //   }
    // }

 }
 public Modificardonador(){


    // let endPoint = "/donar/";

    this.servicioCliente.actualizarDonador(this.SeleccionDonador.id ,{
      id:0,
      nombre:this.formulario.get("nombre")?.value,
      apellido: this.formulario.get("apellido")?.value,
      correo: this.formulario.get("correo")?.value,
      monto: parseFloat(this.formulario.get("monto")?.value)  
    }).subscribe(data =>{
      console.log("Respuesta put: " + data);
    });

    // this.httpClient.put("http://127.0.0.1:3002" + endPoint +this.SeleccionDonador.id,{
    //   id:null,
    //   nombre:this.formulario.get("nombre")?.value,
    //   apellido: this.formulario.get("apellido")?.value,
    //   correo: this.formulario.get("correo")?.value,
    //   monto: parseFloat(this.formulario.get("monto")?.value)  
    // } ).subscribe(data =>{
    //   console.log("Colo COlo, Colo Colo" + data)
    // });





  // this.servicioCliente.actualizarDonador(
  //   {
  //   id:this.SeleccionDonador.id,
  //   nombre:this.formulario.get("nombre")?.value,
  //   apellido: this.formulario.get("apellido")?.value,
  //   correo: this.formulario.get("correo")?.value,
  //   monto: parseFloat(this.formulario.get("monto")?.value)  
  // }).subscribe(respuesta=>{
  //   console.log(respuesta);
  // });

  // location.reload();

  // for(let i = 0; i< this.donadores.length;i++){
  //   if(this.donadores[i].id == this.SeleccionDonador.id){
  //     this.donadores[i].nombre = nombre;
  //     this.donadores[i].rut = rut;
  //     this.donadores[i].dinero = donar;
  //   }
  // }

}



}
