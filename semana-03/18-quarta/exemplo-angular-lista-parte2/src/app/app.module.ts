import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListaComponent} from './lista/lista.component';
import {FormComponent} from './form/form.component';
import {RodapeComponent} from './rodape/rodape.component';
import {TarefasService} from "./tarefas.service";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TarefasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
