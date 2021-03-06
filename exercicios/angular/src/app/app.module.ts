import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardsFeedComponent } from './cards-feed/cards-feed.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';

const routes: Routes = [
  { path: '', component: CardsFeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent } 
 ];

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
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
