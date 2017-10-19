import {Component} from '@angular/core';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  // Cria a variável tarefasNoForm
  tarefasNoForm;

  // Cria a variável refTarefas que recebe o tipo TarefasService que é o nome da class do serviço exportado em TarefasService.service.ts
  constructor(refTarefas: TarefasService) {
    // Passa os dados dentro do objeto na chave tarefas para tarefasNoForm
    this.tarefasNoForm = refTarefas.tarefas
  }

  inserir(input: HTMLInputElement){
    // Pega o elemento que foi inserido na variável tarefasNoForm e insere no HTML
    this.tarefasNoForm.push({
      titulo: input.value,
      feita: false
    });
    
    // Limpa o campo de input
    input.value = '';
    console.log(this.tarefasNoForm);
  }

}
