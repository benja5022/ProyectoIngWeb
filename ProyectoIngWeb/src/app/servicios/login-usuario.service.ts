import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
   

  constructor(private servicio:HttpClient, private router:Router) { }
  
  servidor = "http://127.0.0.1:3002";

 
//validar la sesion 
  ValidarLogin(usuario:string,contrasenia:string):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(usuario);
    const params = new HttpParams();
    params.set("usuario",usuario);
    params.set("contrasenia", contrasenia);
    console.log(`${this.servidor}/login?usuario=${JSON.stringify(usuario)}&contrasenia=${JSON.stringify(contrasenia)}`);
    return this.servicio.get(`${this.servidor}/login?usuario=${usuario}&contrasenia=${contrasenia}`);
  }

}
