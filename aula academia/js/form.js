let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(evento){

    evento.preventDefault()



    let form = document.querySelector('#form-adiciona')

    let paciente = obterValoresDoForm(form)
   
    let erro = validarPaciente(paciente)

    if (erros.length > 0){
        exibeMensamDeErro(erros)
        return
    }

adicionaPacienteNaTabela(paciente)
    
})

function validarPaciente(paciente){
    let erros = []

    if(paciente.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    }
    if(paciente.gordura.length == 0){
        erros.push('O gordura não pode estar em branco')
    }
    if(paciente.peso.length == 0){
        erros.push('O peso não pode estar em branco')
    }
    if(paciente.altura.length == 0){
        erros.push('A altura não pode estar em branco')
    }
    if(!validarPeso(peso)){
        erros.push('Peso Invalida')
    }
    if(!validaAltura(altura)){
        erros.push('Altura Invalida')
    }
    return erros
   
}


function exibeMensamDeErro(erros){
    let ul = document.querySelector('#mensages-erros')
    ul.innerHTML = ''

    erros.forEach(function(erros){
        let li = document.createElement('li')
        li.textContent = erro 
        ul.appendChild(li)
    })
    }

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
}

function montarTr(paciente) {
       let pacienteTr = document.createElement('tr')
       pacienteTr.classList.add('paciente')

       pacienteTr.appendChild(montarId(paciente.nome, 'info-nome'))
       pacienteTr.appendChild(montarId(paciente.peso, 'info-peso'))
       pacienteTr.appendChild(montarId(paciente.altura, 'info-altura'))
       pacienteTr.appendChild(montarId(paciente.gordura, 'info-gordura'))
       pacienteTr.appendChild(montarId(paciente.imc, 'info-imc'))

     return pacienteTr
}

function montarId(dado, classe) {
    //criando um elemento td
       let td = document.createElement('td')
       td.textContent = dado
       //classList define a classe do elemento HTML
       td.classList.add(classe)

       return td
}

function obterValoresDoForm(form){
    let paciente = {
        nome: form.nome.value,
        peso:  form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
         imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}