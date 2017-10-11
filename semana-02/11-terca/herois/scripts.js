const imagens = document.querySelectorAll('.card .card-img-top');
const imagemModal = document.querySelector('.modal-body img');

for(let imagem of imagens){
    imagem.addEventListener('click', (event) => {
        imagemModal.src = event.target.src;
        $('#modalzin').modal();
    });
}
