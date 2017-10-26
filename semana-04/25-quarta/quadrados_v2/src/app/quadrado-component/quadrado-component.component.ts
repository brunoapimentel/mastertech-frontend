import { Component, OnInit } from '@angular/core';
import {log} from "util";

@Component({
  selector: 'app-quadrado-component',
  templateUrl: './quadrado-component.component.html',
  styleUrls: ['./quadrado-component.component.scss']
})
export class QuadradoComponentComponent implements OnInit {
  texto: String;
  quadrado;

  constructor() { }

  ngOnInit() {
  }

  inserir(valorTexto){
    this.texto = valorTexto.value;
    console.log(this.texto);
    valorTexto.style.display = 'none';
  }

  desaparecer(quadradoDiv){
    if(this.texto){
      quadradoDiv.style.display = 'none';
    }
  }
}
