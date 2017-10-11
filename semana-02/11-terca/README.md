# 11 - SASS, BootStrap, NPM, GIT e JQuery

### Manipulando o SASS e instalando dependências pelo NPM

Aprendendo a manipular o SASS e trabalhar com o BootStrap

## SASS

* Importa o Bootstrap 4

`@import 'node_modules/bootstrap/scss/bootstrap';`

* Atribui uma cor HEX em uma variável para reutilizar ao longo do código

`$red: #ff0000;`

* Converte o input para o output

`sass input.scss output.css`

* Mantêm o processo de conversão ativo

`sass --watch input.scss:output.css`

## GIT

* Adiciona todos as modificações

`git add .`

* Comenta o que foi alterado nas modificações adicionadas

`git commit -m "Comentário sobre o que foi alterado"`

* Realiza o upload dos seus commmits

`git push`

* Baixa e aplica as atualizações mais recentes

`git pull`

## NPM

* Instala o Bootstrap 4 através do NPM (Package Manager)

```
npm install bootstrap@4.0.0-beta

```

* Instala outras dependências para rodar o JS do bootstrap

```
npm install jquery

npm install popper.js

```

## JQuery

* Inicializa o item com o id="modalzin"

```
$('#modalzin').modal();

```
