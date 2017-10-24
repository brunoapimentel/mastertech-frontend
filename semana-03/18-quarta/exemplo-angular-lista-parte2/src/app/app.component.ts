import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  nome = 'João da silva';

  constructor(){
    console.log(this.nome);
  }
}
