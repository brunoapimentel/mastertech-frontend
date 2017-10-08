# 06 - Revisão e Projeto

### Início do primeiro projeto do curso de Front-End Mastertech

Revisão dos conceitos de CSS e JS e início do projeto.

## Dicas para o CSS

* Utilizem várias classes em uma mesma tag

```
//HTML
<section class="text-center container">
<h1>Meu Título</h1>
</section>

//CSS
.text-center {
  text-align: center;
}
.container{
  margin: 0 15%;
}
```
* Abusem do border radius

```
//HTML
<section class="text-center container">
<img src="#" class="bordinha">
<h1>Meu Título</h1>
</section>

//CSS
.text-center {
  text-align: center;
}
.container {
  margin: 0 15%;
}
.bordinha {
  border-radius: 50%;
  border: 1px solid black;
}
```

* Usem o media queries

```
@media(max-width: 1024px) and (min-width: 700px){
  container{
    display: flex;
    }
    h1 {
      color: red;
    }
  }

  @media (max-width: 699px){
    container{
      display: flex;
      flex-wrap: wrap;
      }
      h1 {
        color: blue;
      }
  }

```
## JS

* Duas formas de declarar uma função (Ambos são a mesma coisa!!! Elas somente estão escritas de formas diferentes)

ES5
```
function defineNome(){

}
```

ES6
```
const defineNome = () => {

}
```

## Quer ir além?

* Crie uma conta no [GitHub](https://github.com/) e plublique seu projeto

* Lembre de fazer uma cópia antes, só por segurança!
