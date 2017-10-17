const div = document.querySelector('div');

// Inicia uma Class
class Cliente {
  // O Constructor referencia os elementos dentro da Class
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;

    this.compras = [];
  }

  calcularGastos() {
    let gastos = 0;

    for (let produto of this.compras) {
      gastos = gastos + produto.valor;
    }

    return gastos;
  }

  dizerNome() {
    document.write(this.nome);
  }

  fazerCompra(item) {
    item.valor = Number(item.valor);
    this.compras.push(item);
  }
}

const clientes = [
  new Cliente('João da Silva', 'joaodasilva@gmail.com'),
  new Cliente('Maria da Silva', 'mariadasilva@gmail.com')
];

const umCliente = new Cliente('José');
const inputProduto = document.querySelector('#input-produto');
const inputValor = document.querySelector('#input-valor');
const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  umCliente.fazerCompra({
    produto: inputProduto.value,
    valor: inputValor.value
  });

  console.log(umCliente);
});
