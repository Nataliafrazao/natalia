//Mudado Titulo Dinamicamente
//Declarando variaveis utilizando o let
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//-------------------------------------------------------

//Selecionando todos os pacientes da tabela e colocando dentro de uma lista
let pacientes = document.querySelectorAll('.pacientes')
console.log(pacientes)

//percorrendo a lista de pacientes
for (var i = 0; i <= pacientes.length;) {
    let paciente = pacientes[i]

    //recebendo o peso do paciente
    let pesoTD = paciente.querySelector('.info-peso')
    let peso = pesoTD.textContent

    //recebendo a altura do pacinte
    let alturaTD = paciente.querySelector('.info-altura')
    let altura = alturaTD.textContent


    let imcTD = paciente.querySelector('.info-imc')
 
    let pesoEhValido = validaPeso(peso)
    let alturaEhValiado = validaAltura(altura)

    if(!pesoEhValido){
        console.log('Peso Invalido')
        pesoEhValido = false
        imcTD.textContent = 'Peso Ivalido'
        paciente,classList.add('pasiente-ivalido')
    }
    if(!alturaEhValiado){
        console.log('Altura invalida')
        alturaEhValiado = false
        imcTd.textContent = 'Altura Invalida'
        paciente,classList.add='paciente-invalidp'
    }
    if(pesoEhValido && alturaEhValiado){
        let imc = calculaImc(peso,altura)
        imcTd.textContent = imc
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    //calcuando o imc do paciente
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}



function validaPeso(peso) {
    if(peso >= 0 && peso <= 1000) {
        return true
    } else{
      return false
}
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    } else{
        return false
    }
}