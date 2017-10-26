import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bola',
  templateUrl: './bola.component.html',
  styleUrls: ['./bola.component.css']
})
export class BolaComponent implements OnInit {
  bolas = [];

  constructor() { }

  ngOnInit() {
  }

  virarQuadrado(bola){
    if(bola.style.borderRadius == '100%'){
      bola.style.borderRadius = '0px';
    }
    else{
      bola.style.borderRadius = '100%';
    }
  }

  criarBolas(bola){
    this.bolas.push(bola);
  }

}

