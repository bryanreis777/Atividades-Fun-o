function receberValor(){
    valor = Number(prompt(`Digite o valor da compra:`))
    return valor
}

function aplicarDesconto(bruto){
    let total = 0
    total = bruto - (bruto*0.1)
    return total
}

function retornarValor(compra){
    let final
    if(compra>=100){
        final = aplicarDesconto(compra)
        alert(`O seu valor foi acima ou igual a 100, recebe um desonto de 10%, o valor final é: ${final}`)
    }
    else{
        alert(`O seu valor foi abaixo de 100, não recebe desconto, o valor final é: ${compra}`)
    }
}

let num = receberValor()
retornarValor(num)