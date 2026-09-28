function receberSenha(){
    let valor1 = prompt("Digite sua senha")
    return valor1
}
function receberUsuario(){
    valor2 = prompt("Digite seu usuario")
    return valor2
}
function validarSenha(id){
    let tamanho = id.length
  if(tamanho >= 6){
    return 1
  } else{
    return 0
  }
}
function autenticarUsuario(user, senha1){
   if(validarSenha(senha1)){
    let confirmação = `Acesso concedido para ${user}`
    return confirmação
   } else{
    let negacao = `Senha muito curta para o usuario ${user}`
    return negacao
   }
}
function mostrarAcesso(estatos){
    alert(`${estatos}`)
}
let senha = receberSenha()
let usuario = receberUsuario()
let acesso = autenticarUsuario(usuario, senha)
mostrarAcesso(acesso)