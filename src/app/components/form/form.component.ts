import { Component, OnInit } from '@angular/core';
import { lectores } from 'src/app/models/lectores.model'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name: string = '';
  public lastName: string = '';
  public email: string = '';
  public valorLectores: lectores[] = [];
  public valorTotal: lectores | undefined;

  constructor() {

  }
  
  ngOnInit(): void {
  }

  public elementosSeleccionados(name: string,lastname: string,email: string):void{
    
    this.valorTotal = {nombre:name, apellido:lastname, correo:email};
    
    this.valorLectores.push(this.valorTotal);
    console.log(this.valorLectores);//JSON.stringify(this.valorTotal)
  }
}
