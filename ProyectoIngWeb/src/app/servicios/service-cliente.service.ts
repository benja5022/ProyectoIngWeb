import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donaciones } from '../interfaces/donaciones';

const HttpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  servidor = "http://127.0.0.1:3002";

  constructor(private servicio:HttpClient) {

  }

  consultarUsuarios():Observable<any>{
    return this.servicio.get( `${this.servidor}/donar`);
  }

  agregarDonador(donacion:Donaciones):Observable<any>{
    return this.servicio.post( `${this.servidor}/donar`,JSON.stringify(donacion), HttpOption );
  }

  actualizarDonador(donacion:Donaciones):Observable<any>{
    return this.servicio.put( `${this.servidor}/donar`,JSON.stringify(donacion), HttpOption );
  }
  // eliminarUsuario():Observable<any>{
  //   return this.servicio.delete( `${this.servidor}/donar`);
  // }
}
