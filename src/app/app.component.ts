import { Component, ElementRef, OnInit, ViewChild, Renderer2} from '@angular/core';
// import { createPublicKey } from 'crypto';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit{
  // @ViewChild('') botoncillo: ElementRef;
  title = 'proyectoAngular';

  constructor(){
    
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }

}