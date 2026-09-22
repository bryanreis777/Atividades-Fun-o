<p>IFTM – CAMPUS PATROCÍNIO <br>
CURSO TÉCNICO EM INFORMÁTICA INTEGRADO AO ENSINO MÉDIO<br>
LABORATÓRIO DE PROGRAMAÇÃO 2<br>
Atividade Individual – armazenar no github.<br>
Cada aluno, além do código, deverá relatar em formato de comentário dentro do<br>
arquivo JS de cada atividade:<br>
O processo de pensamento lógico que tomou para resolver a questão, bem como<br>
as entradas, processamentos e saída. Também deve dar um parecer pessoal<br>
sobre a dificuldade daquela questão fácil, médio, difícil e uma breve explicação<br>
do motivo.<br>
1. Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:<br>
base e altura. A função deve calcular e retornar o valor da área (área = base ×<br>
altura).<br>
2. Escreva uma função chamada ehPar que receba um número como parâmetro e<br>
retorne true se o número for par e false caso seja ímpar.<br>
3. Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).
4. Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:<br>
• IMC < 18.5: "Abaixo do peso"<br>
• IMC entre 18.5 e 24.9: "Peso normal"<br>
• IMC ≥ 25.0: "Sobrepeso"<br>
5. Crie uma função chamada somarElementos que receba um array de números<br>
como parâmetro, percorra o vetor, some todos os valores e retorne o total.<br>
6. Crie uma função chamada formatarPessoa que receba um objeto representando<br>
uma pessoa com as propriedades nome, idade e profissao. A função deve retornar<br>
uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e<br>
trabalho como [profissao]."<br>
7. Crie duas funções para processar o valor de uma venda:<br>
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de<br>
desconto, retornando o valor com o desconto aplicado.<br>
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,<br>
chama internamente a função aplicarDesconto (com 10% de desconto) e<br>
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem<br>
alterações.<br>
8. Crie duas funções para autenticação de acesso:<br>
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6<br>
caracteres, ou false caso contrário.<br>
b) autenticarUsuario(usuario, senha): chama internamente a função<br>
validarSenha. Se a senha for válida, retorna "Acesso concedido para<br>
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário<br>
[usuario]".<br>
9. Crie duas funções para avaliar o desempenho de um aluno:<br>
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna<br>
a média aritmética simples dessas notas.<br>
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades<br>
nome e notas (onde notas é um array com 3 notas). A função deve chamar<br>
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna<br>
"Aprovado", caso contrário, retorna "Reprovado".<br>
10. Escreva um programa completo para análise de uma turma contendo três<br>
funções:<br>
a) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso<br>
contrário.<br>
b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada<br>
objeto é um aluno com {nome, nota}). Percorre a lista, chama a função<br>
verificarAprovacao para cada aluno e retorna o total de alunos aprovados.<br>
c) executarAnalise(): função principal que solicita via prompt o cadastro de 4<br>
alunos (armazenando-os num array de objetos), chama contarAprovados e<br>
exibe o total de aprovados no console.log.</p><br>
