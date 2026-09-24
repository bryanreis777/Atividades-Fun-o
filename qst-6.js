function formatarPessoa(){
    pessoa ={
        nome : prompt(`Digite seu o seu nome:`),
        idade : Number(prompt(`Digite sua idade`)),
        profissao : prompt(`Digite sua Profissão`)
    }
    return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.profissao}`
}
alert(formatarPessoa())