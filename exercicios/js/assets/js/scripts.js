console.log(`JS Funcionando`);
// Show or Hide text
let btnCompany = document.querySelector('#company button')
let txtCompany = document.querySelector('#extraTxt')

// console.log(btnCompany);
// console.log(txtCompany);

btnCompany.addEventListener('click', () => {

  if (txtCompany.style.display === 'none') {
    txtCompany.style.display = 'block'
  } else {
    txtCompany.style.display = 'none'
  }

})

// Show description on hover
let servicesTxts = document.querySelectorAll('#services h3')

// console.log(servicesTxts);

for (servicesTxt of servicesTxts) {

  servicesTxt.addEventListener('mouseover', (event) => {
    console.log(event.target);
    if (event.target.innerHTML === 'Title') {
      event.target.innerHTML = 'Description'
    } else {
      event.target.innerHTML = 'Title'
    }
  })
}


//Insert Menu Items
let menuItems = document.querySelectorAll('#main a')

console.log(menuItems);
let control = 0;

for (menuItem of menuItems) {
  let menuTxt = [
    'Delta',
    'Home',
    'Empresa',
    'Serviços',
    'Produtos',
    'Contato'
  ]

  let menuRef = [
    '#',
    '#',
    '#company',
    '#services',
    '#products',
    '#contact'
  ]

  menuItem.innerHTML = menuTxt[control];
  menuItem.href = menuRef[control];

  control++;

}
