

function entrada(){
    const numeros = []

    let total = Number(prompt(`Digite o total de números a ser somados:`))

    for(i = 0; i < total; i++){
        let num = Number(prompt(`digite um número: `)) 
        numeros[i] = num
    }
    return numeros 
}

num = entrada()
