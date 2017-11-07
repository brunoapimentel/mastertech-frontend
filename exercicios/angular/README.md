# Stickers

Exercicio Angular Mastertech

# Instruções

## Objetivo

Construir uma aplicação utilizando Angular, SASS, Bootstrap, Firebase

## 00 Protótipo

* Desenhar as telas do wireframe

* Dividir o conteúdo do wireframe em módulos que serão re-utilizados como componentes

## 01 Iniciando a aplicação

---

### Desafios

* Iniciar a aplicação

* Utilizar o SASS no Projeto

* Instalar e Importar o Bootstrap via NPM

* Instalar e Importar o JQuery, PopperJs e BootstrapJs via NPM

---

`ng new NOMEDOPROJETO --style=scss`

Entre na pasta do Projeto

  `cd NOMEDOPROJETO`

Rode a aplicação

  `ng serve`

* Instale o Bootstrap4 no projeto

`npm install bootstrap@4.0.0-beta.2 --save`

`npm install jquery --save`

`npm install popper.js --save`

OU

`npm install bootstrap@4.0.0-beta.2 jquery popper.js --save`

No arquivo `.angular-cli.json` adicione o endereço do arquivo do bootstrap instalado pelo NPM
Conforme demonstrado abaixo

```
"styles": [
        "../node_modules/bootstrap/scss/bootstrap.scss",
        "styles.sass"
      ],
```

E logo abaixo os endereços do jQuery, Popper e do BootstrapJs

```
"scripts": [
        "../node_modules/jquery/dist/jquery.slim.min.js",
        "../node_modules/popper.js/dist/umd/popper.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],
```

Rode a aplicação novamente

  `ng serve`

>Você irá perceber que o conteúdo já estará estilizado com o Bootstrap

## 02 Criação dos Componentes

---

### Desafios

* Criar os componentes

* Estruturar o HTML dos componentes

* Para criar uma aplicação com o arquivo sass como padrão utilize o Comando

* Construa o HTML de cada componente individualmente

---

Para criar um componente pare a aplicação e utilize no terminal o comando

`ng g component NOMEDOCOMPONENTE`

>Você terá então dentro da pasta `src/app` uma pasta com o conteúdo de cada elemento que foi criado

* Edite o componente para que fique igual ao wireframe

Lembre que cada componente tem seus próprios arquivos seguindo a estrutura abaixo

HTML

>NOMDEDOCOMPONENTE.component.html

SASS

>NOMDEDOCOMPONENTE.component.scss

TS

>NOMDEDOCOMPONENTE.component.ts

* Insira cada elemento criado dentro de `app.component.html` para vizualizar e testar conforme o exemplo abaixo

```
<!-- Início da Aplicação -->
<div style="text-align:center">
  <h1>
    Welcome to {{title}}!
  </h1>
</div>

<!-- Inserção dos componentes -->
<app-card-details></app-card-details>
<app-card-feed></app-card-feed>
<app-login></app-login>
<app-signup></app-signup>
```

## 03 Importando o Firebase e Angularfire2

---

### Desafios

* Importar as propriedades do console do firebase para o Angular

* Instalar e Importar Firebase e AngularFire2 via NPM

---

### Firebase Console

 Crie um novo projeto em `https://firebase.google.com/`

 Em `Overview` clique na opção `Add Firebase to your web app`

 Copie somente o objeto

```
 var config: {
    apiKey: "[...]",
    authDomain: "[...]",
    databaseURL: "[...]",
    projectId: "[...]",
    storageBucket: "[...]",
    messagingSenderId: "[...]"
  }
```

E cole dentro de `environments/environment.ts` e em `environments/environment.prod.ts` alterando para o TS

No final você terá algo parecido com o snippet abaixo

```
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBnI2CEGFH1Ncmx1pTFYc68Llf4s-Js5GA",
    authDomain: "stickers-8570f.firebaseapp.com",
    databaseURL: "https://stickers-8570f.firebaseio.com",
    projectId: "stickers-8570f",
    storageBucket: "stickers-8570f.appspot.com",
    messagingSenderId: "234735253876"
  }
};
```

### Instalar e Importar Firebase e AngularFire2 via NPM

No terminal utilize `npm install firebase angularfire2 --save` para instalar as dependencias no seu projeto

No seu arquivo `app/app.module.ts` importe os modulos do Firebase e do Angularfire (Database, Auth) para o Firebase

Importe também os arquivos com as chaves de acesso ao seu projeto no Firebase que foram salvos em `environments/environment.ts` e em `environments/environment.prod.ts`

```
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
```

E em `imports`

```
 imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
```

O seu arquivo `app.module.ts` ficará parecido com o código abaixo

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 04 Populando Firebase e Chamando no Angular

---

### Desafios

* Criar dados na database do firebase

* Importar o objeto criado no app

* Injetar os items chamados no html

---

### Firebase

Para que as informações sejam acessadas de forma dinâmica precisamos primeiro preencher nosso banco de dados no firebase e depois indicar para a nossa aplicação quais dados ela deve exibir

* Populando o Firebase

Para facilitar eu criei um arquivo `.json` que podemos importar diretamente no firebase, você também pode criar manualmente na database do seu projeto

````
{
    "stickers" : {
      "angular" : {
        "id": "001",
        "description" : "Sticker do famoso framework Angular",
        "title" : "Angular",
        "url" : "https://stickers.com/angular",
        "img": "http://via.placeholder.com/350x250"
      },
      "ionic" : {
        "id": "002",
        "description" : "A melhor plataforma de desenvolvimento hibrido",
        "title" : "Ionic",
        "url" : "https://stickers.com/ionic",
        "img": "http://via.placeholder.com/350x250"
      },
      "react" : {
        "id": "003",
        "description" : "Simplesmente o melhor framework disponível",
        "title" : "React",
        "url" : "https://stickers.com/react",
        "img": "http://via.placeholder.com/350x250"
      },
      "vuejs" : {
        "id": "004",
        "description" : "Um dos frameworks mais promissores da atualidade",
        "title" : "Vue.js",
        "url" : "https://stickers.com/vuejs",
        "img": "http://via.placeholder.com/350x250"
      }
    }
}
````

### TS 

Agora precisamos falar para o `.ts` do componente quais dados eles vai utilizar do firebase

* Importamos o angularfire2 e o observable

````
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
````

* Dentro da class criamos o objeto que será observado

```
export class CardsFeedComponent implements OnInit {
feedObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
```

* Ao iniciar passamos a referencia do banco de dados do firebase que será observada

```
  ngOnInit() {
    this.feedObservable = this.getCards('/stickers');
  }
```

* E por fim chamamos os dados do firebase

```
  getCards(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();  
}
```

No final seu arquivo `.ts` ficará parecido com o código abaixo

```
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cards-feed',
  templateUrl: './cards-feed.component.html',
  styleUrls: ['./cards-feed.component.scss']
})
export class CardsFeedComponent implements OnInit {
feedObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.feedObservable = this.getCards('/stickers');
  }

  getCards(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();  

}

}
```

### HTML

Por fim precisamos referenciar essas informações no HTML do nosso componente

Utilize então o `*ngFor` que se comporta como um `for of` buscando todos os itens no Objeto criado no `.ts` e atibuindo na variavel que iremos iniciar, nesse caso chamamos de `item`

`*ngFor="let item of feedObservable | async"`

E finalmente inserimos o nome do dado dentro do objeto que queremos exibir dentro do código 

`{{item.NOMEDACHAVE}}`

Este é o código com o HTML preenchido

```
<section class="container">
  <h1 class="text-center">Main Feed</h1>
    <div class="row text-center">
        <div class="col-xs-12 col-md-4 d-flex justify-content-center mt-3" *ngFor="let item of feedObservable | async">
          <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="{{item.img}}" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">{{item.title}}</h4>
              <p class="card-text">{{item.description}}</p>
              <a href="{{item.url}}" class="btn btn-primary">Ver Detalhes</a>
            </div>
          </div>
        </div>
      </div>
</section>
```

## 05 Rotas

---

### Desafios

* Importar o modulo das rotas no seu app

* Configurar as rotas

* Alterar os links para as rotas

---

Galera rota no angular4 é mega simples!!!!

Então agora que toda nossa aplicação está configurada vamos linkar as páginas

* A primeira coisa que precisamos fazer é importar o modulo de rotas no nosso `app.module.ts`

 `import { RouterModule, Routes } from '@angular/router';`

 * Agora ainda no `app.module.ts` vamos criar uma variavel que irá controlar as rotas

```
 const routes: Routes = [
  { path: '', component: CardsFeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent } 
 ];
 ```

 * Ultima configuração no nosso arquivo `app.module.ts` é importar a config do modulo 
 
 Para isso vamos inserir o comando abaixo dentro do nosso array imports[]

 `RouterModule.forRoot(routes)`

 ```
 imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  ```

  * Dentro do nosso arquivo `app.compenent.html` alteramos os injects que estão fixados pela tag
  
  `<router-outlet></router-outlet>`

  Assim todos código que for chamado pela rota irá ser injetado dentro desta tag

  * E por fim só precisamos direcionar os links de nossas páginas então ao invés de utilizar o parâmetro `href=""` vamos utilizar o `routerLink="/NOMDEDAROTA"`

  ```
  <li class="nav-item">
    <a class="nav-link" routerLink="/signup">Signup</a>
  </li>
  ```

## 06 Deploy

---

### Desafios

* Exportar seu aplicativo para o ambiente de produção

---

Para Exportar seu app utilize o comando

`ng build`

Agora é só pegar o conteúdo da pasta `dist` que foi gerada e colocar em um servidor de produção!

# FIM
