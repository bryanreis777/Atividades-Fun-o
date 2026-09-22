//Eu aprendi uma identação mais qualificada, ou seja, mais organizada, pensada em programas futuros, a lógica para verificação não foi difícil, apenas a identação

function letnumber(){
    numero = Number(prompt(`Digite um número para avaliação:`))
    return numero
}
function processamento(parimpar){
    if(parimpar%2 == 0){
        return true
    }
    if(parimpar%2 !== 0){
        return false
    }
    return parimpar
}

function saida(verificacao){
    if(verificacao == true){
        alert(`Seu número é par !`)
    }
    if(verificacao == false){
        alert(`Seu número é impar !`)
    }

}

let num = letnumber()
let avalia = processamento(num)
saida(avalia)

