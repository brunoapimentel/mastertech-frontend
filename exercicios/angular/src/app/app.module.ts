import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardsFeedComponent } from './cards-feed/cards-feed.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CardsFeedComponent,
    CardsDetailComponent,
    CardsNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
