let titulo = document.querySelector('h1');
let texto = document.querySelector('p');
let modal = document.querySelector('.modal');

function mudarTitulo() {
  titulo.innerHTML = 'Chapolin';
}

function mudarTexto() {
  texto.style.color = 'red';
}

function alternarModal() {
  if (modal.style.display == 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}
