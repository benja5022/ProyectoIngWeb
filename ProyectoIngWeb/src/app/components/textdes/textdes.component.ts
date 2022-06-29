import { Component, OnInit } from '@angular/core';
import { donadores } from 'src/app/models/donadores.model';

import listaDePersonas from 'src/assets/json/cuki.json' ;
import {Donaciones} from './../../interfaces/donaciones';
// import { HttpClient } from '@angular/common/http';
import  { ServiceClienteService } from './../../servicios/service-cliente.service' ;
// import { elementAt } from 'rxjs';
// import { stringify } from 'querystring';


@Component({
  selector: 'app-textdes',
  templateUrl: './textdes.component.html',
  styleUrls: ['./textdes.component.scss']
})
export class TextdesComponent implements OnInit {
  coleccion: any = listaDePersonas;
  public donadores: donadores[] = [];
  donaciones:Array<Donaciones>=[];
  constructor(private servicioCliente:ServiceClienteService) {
  // constructor() {
    
    /*console.log(this.coleccion.persona[1]["apellido"]);

    this.donadores = []
    let i: number;
    for(i = 0; i < this.coleccion.persona.length; i = i+1){
      this.donadores.push({nombre: this.coleccion.persona[i]["nombre"] , rut:this.coleccion.persona[i]["rut"], dinero:this.coleccion.persona[i]["dinero"]});
    }*/

  }

    // console.log(this.coleccion.persona[1]["apellido"]);
    
    // this.donadores = [
    //   {nombre: 'Pedro', apellido: 'Rojas'},
    //   {nombre: 'Dagoberto', apellido: 'Espinoza'},
    //   {nombre: 'Gabriel', apellido:'Osorio'},
    //   {nombre: 'Vicente', apellido: 'Paredes'},
    //   {nombre: 'Ezequiel', apellido: 'Scaloni'},
    //   {nombre: 'Matias', apellido: 'Ruiz'},
    //   {nombre: 'Francisco', apellido: 'Rojas'},
    //   {nombre: 'Ignacio', apellido: 'Herrera'},
    //   {nombre: 'Joaquín', apellido: 'Vidal'},
    //   {nombre: 'Valentina', apellido: 'Ruzzarin'},
    //   {nombre: 'Sadio', apellido: 'Kanté'},
    //   {nombre: 'Ignacio', apellido: 'Herrera'},
    //   {nombre: 'Gonzalo', apellido: 'Azpilicueta'},
    //   {nombre: 'Manuel', apellido: 'Borghi'}
    // ]

    


  ngOnInit(): void {
    this.servicioCliente.consultarDonador().subscribe(
      datos=> {
        for(let i = 0; i< datos.length; i++){
          if(datos[i].monto > 1000 ){
            this.donaciones.push(datos[i]);
          }
        }
        console.log(datos);
      });
  }
}



