let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(evento) {

    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

   let cliente = obterValoresDoForm(form)
   adicionaPacienteNaTabela(paciente)
})
function adicionaPacienteNaTabela(paciente){
  let pacienteTr = montarTr(paciente)
  let tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)
}

function montarTr(paciente){
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))
    
    return pacienteTr
}

