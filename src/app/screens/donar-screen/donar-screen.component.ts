import { Component, OnInit } from '@angular/core';
import { donadores2 } from 'src/app/models/donadores.model';
import listaDePersonas from 'src/assets/json/cuki.json' ;

@Component({
  selector: 'app-donar-screen',
  templateUrl: './donar-screen.component.html',
  styleUrls: ['./donar-screen.component.scss']
})


export class DonarScreenComponent implements OnInit {
  coleccion: any = listaDePersonas;
  public donadores: donadores2 [ ] = [ ];
  public SeleccionDonador: any;
  public id: number = 1;
  public nombre: string = '';
  public donar: string = '';
  public rut: string = '';

  //datos usando js 
  constructor() { 
     this.donadores = []
     let i: number;
     for(i = 0; i < this.coleccion.personas.length; i = i+1){
       this.donadores.push({id: this.coleccion.personas[i]["id"],nombre: this.coleccion.personas[i]["nombre"] , rut:this.coleccion.personas[i]["rut"], dinero:this.coleccion.personas[i]["dinero"]});
     }
   this.SeleccionDonador = null;
  }

  ngOnInit(): void {
  }


  public Seleccionardonador(donador: any){
    this.SeleccionDonador = donador;
    console.log(this.SeleccionDonador)
  }

  public AgregarDonador( nombre:string, rut:string, donar:string){
    let donador = {
      id: this.donadores.length+1,
      nombre: nombre,
      rut: rut,
      dinero: donar
    }
     this.donadores.push(donador)
     console.log(this.donadores)
  }

  public EliminarDonador(){
    for(let i = 0; i< this.donadores.length;i++){
      if(this.donadores[i].id == this.SeleccionDonador.id){
        this.donadores.splice(this.donadores[i].id-1,1)
      }
    }
 }
 public Modificardonador(nombre:string,rut:string,donar:string){
  for(let i = 0; i< this.donadores.length;i++){
    if(this.donadores[i].id == this.SeleccionDonador.id){
      this.donadores[i].nombre = nombre;
      this.donadores[i].rut = rut;
      this.donadores[i].dinero = donar;
    }
  }
}


}
