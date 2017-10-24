const div = document.querySelector('div');

// Define uma Class
class Cliente {
  // O método construtor é chamado toda vez que criamos uma
  // instância dessa classe
  constructor(nome, email) {
    //Podemos definir as variáveis que estarão contidas
    //nesse objeto dentro do método construtor
    this.nome = nome;
    this.email = email;

    this.compras = [];
  }

  calcularGastos() {
    let gastos = 0;

    //A palavra chave this se refere ao próprio objeto
    //que está executando essa função
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

// Aqui criamos duas instâncias da classe Cliente e as
// colocamos dentro de um vetor (apenas para exemplificar)
const clientes = [
  new Cliente('João da Silva', 'joaodasilva@gmail.com'),
  new Cliente('Maria da Silva', 'mariadasilva@gmail.com')
];

// Vamos criar uma instância da classe Cliente
const umCliente = new Cliente('José');

const inputProduto = document.querySelector('#input-produto');
const inputValor = document.querySelector('#input-valor');
const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  // Aqui iremos fazer com que o objeto Cliente
  // execute sua função fazerCompra ao clicar no botão da página
  umCliente.fazerCompra({
    produto: inputProduto.value,
    valor: inputValor.value
  });

  console.log(umCliente);
});
