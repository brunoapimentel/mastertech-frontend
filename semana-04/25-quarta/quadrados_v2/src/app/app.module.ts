import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuadradoComponentComponent } from './quadrado-component/quadrado-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadradoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
