import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  contador = 0

  lista = [{
      produto: "Arroz",
      quantidade: 15
    },
    {
      produto: "Feijão",
      quantidade: 12
    }]

  adicionarContagem() {
    this.contador++;
  }

  constructor() {
 
  }

  ngOnInit() {}

}

