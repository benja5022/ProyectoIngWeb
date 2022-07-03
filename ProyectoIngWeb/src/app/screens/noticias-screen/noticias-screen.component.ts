import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-screen',
  templateUrl: './noticias-screen.component.html',
  styleUrls: ['./noticias-screen.component.scss']
})
export class NoticiasScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = JSON.parse(localStorage.getItem('sitiomovil') || 'null');
    //console.log(datos);
    if(datos == null){
      window.location.href="/inicioSesion";
    }
  }

}
