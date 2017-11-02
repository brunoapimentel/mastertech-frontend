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
