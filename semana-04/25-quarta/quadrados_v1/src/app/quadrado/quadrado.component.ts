import {Component} from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss']
})
export class QuadradoComponent {
  texto: string;
  invisivel = false;

  salvarTexto(textarea: string) {
    this.texto = textarea;
  }

  ocultarQuadrado(){

    if (this.texto) {
      this.invisivel = true;
    }
  }

}
