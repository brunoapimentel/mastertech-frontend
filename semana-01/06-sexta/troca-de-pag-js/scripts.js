console.log(`JS funcionando`);

// Importa todos os <a></a> do id="menu"
let menus = document.querySelectorAll('#menu a');

// Declara a funcao que contem os links
const defineNome = () => {
  //Define o nome do link do #menu
  menus[0].innerHTML = 'Home';
  menus[1].innerHTML = 'Contact';
}

// Declara a funcao que contem as referencias
const defineReferencia = () => {
  //Define a referencia do link do #menu
  menus[0].href = 'index.html';
  menus[1].href = 'contact.html';
}

// Executa as funcoes
defineNome()
defineReferencia()
