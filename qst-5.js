

function entrada() {
    const numeros = []

    let total = Number(prompt(`Digite o total de números a ser somados:`))

    for (i = 0; i < total; i++) {
        let num = Number(prompt(`digite um número: `))
        numeros[i] = num
    }
    return numeros
}

function calculo(array){
    let total = 0
    for (let soma of array) {
        total = total + soma
    }
   
    return total
}

function mostrar(resul) {
    alert(`A soma dos números que você digitou é: ${resul}`)
}

let num = entrada()
let tot = calculo(num)
mostrar(tot)


