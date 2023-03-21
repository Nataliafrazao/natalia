let cliente = document.querySelectorAll('.cliente')
let tabela = document.querySelector('#tabela-Restaurante')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        event.target.parentNode.remove()
    }, 500)
   
})