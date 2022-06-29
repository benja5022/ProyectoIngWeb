import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donaciones } from '../interfaces/donaciones';
import { Usuarios } from '../interfaces/usuarios';
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

  consultarDonador():Observable<any>{
    return this.servicio.get( `${this.servidor}/donar`);
  }

  agregarDonador(donacion:Donaciones):Observable<any>{
    return this.servicio.post( `${this.servidor}/donar`,JSON.stringify(donacion), HttpOption );
  }

  actualizarDonador(id:number,donacion:Donaciones):Observable<any>{
    return this.servicio.put( `${this.servidor}/donar/${id}`,JSON.stringify(donacion), HttpOption );
  }

  eliminarDonador(id:number):Observable<any>{
    return this.servicio.delete( `${this.servidor}/donar/${id}`, HttpOption );
  }

  revisarUsuario(correo:string):Observable<any>{
    return this.servicio.get( `${this.servidor}/unete/${correo}`, HttpOption);
  }

  agregarNuevoUsuario(usuario:Usuarios):Observable<any>{
    return this.servicio.post( `${this.servidor}/unete`,JSON.stringify(usuario), HttpOption );
  }



}
