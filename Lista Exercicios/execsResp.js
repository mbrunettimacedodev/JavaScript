// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let prompt = require("prompt-sync")();

// let numeroInteiro = Number(prompt("Digite um número inteiro: "));

// if (isNaN(numeroInteiro)) {
//     console.log("Algo que foi digitado não corresponde a um número.");
// } else if (numeroInteiro % 2 == 0) {
//     console.log(`${numeroInteiro} é par.`);
// } else {
//     console.log(`${numeroInteiro} é ímpar.`);
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

// 0 a 12 → criança
// 13 a 17 → adolescente
// 18 a 59 → adulto
// 60+ → idoso

// let classIdade = Number(prompt("Digite a idade da pessoa: "))

// if(classIdade <= 12){
//     console.log(`Você tem ${classIdade} anos - Classificação: Criança`)
// }else if(classIdade <= 17){
//     console.log(`Você tem ${classIdade} anos - Classificação: Adolescente`)
// }else if(classIdade <= 59){
//     console.log(`Você tem ${classIdade} anos - Classificação: Adulto`)
// }else if(classIdade >= 60){
//     console.log(`Você tem ${classIdade} anos - Classificação: Idoso`)
// }else{
//     console.log("Valor digitado não corresponde a um número.")
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
// "Recuperação", ou "Reprovado" utilizando if-else if.

// let nota = Number(prompt("Digite a nota do aluno: "))

// /* 
// Aprovado >= 6
// Recuperação < 6
// Reprovado <= 3 
// */

// if(nota >= 6){
//     console.log(`Nota: ${nota} - Classificação: Aprovado!`)
// }else if(nota < 6 && nota > 3){
//     console.log(`Nota: ${nota} - Classificação: Recuperação!`)
// }else if(nota <= 3){
//     console.log(`Nota: ${nota} - Classificação: Reprovado!`)
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// let menu = prompt("Escolha uma das opções: Barcelona, Real Madrid e Manchester United ").toLowerCase()

// switch(menu){
//     case "barcelona":
//         console.log(`Você escolheu ${menu}, seja bem-vindo ao time do Barcelona!`)
//     break

//     case "real madrid":
//         console.log(`Você escolheu ${menu}, seja bem-vindo ao time do Real Madrid!`)
//     break

//     case "manchester united":
//         console.log(`Você escolheu ${menu}, seja bem-vindo ao time do Manchester United!`)
//     break

//     default:
//         console.log("Opção digitada não existe.")
//     break
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

/*
Abaixo de 18.5 → Abaixo do peso
18.5 até 24.9 → Peso normal
25.0 até 29.9 → Sobrepeso
30.0 até 34.9 → Obesidade grau 1
*/

// let altura = Number(prompt("Digite a sua altura em metros: "))
// let peso = Number(prompt("Digite o valor do seu peso em KG: "))
// let imc = (peso / (altura * altura)).toFixed(2)

// if(imc <= 18.5){
//     console.log(`Seu imc é: ${imc} - Classificação: Abaixo do peso`)
// }else if(imc > 18.5 && imc <= 24.9){
//     console.log(`Seu imc é: ${imc} - Classificação: Peso normal`)
// }else if(imc >= 25 && imc <= 29.9){
//     console.log(`Seu imc é: ${imc} - Classificação: Sobrepeso `)
// }else if(imc >= 30){
//     console.log(`Seu imc é: ${imc} - Classificação: Obesidade grau 1`)
// }else{
//     console.log("Opção digitada não condiz a um valor numérico.")
// }

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// ● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// ● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// ● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// ● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)


// let A = Number(prompt("Digite o número de lados A: "))
// let B = Number(prompt("Digite o número de lados B: "))
// let C = Number(prompt("Digite o número de lados C: "))

// if(A < B + C && B < A + C && C < A + B){
//     console.log("Diante dos valores digitados, realmente é um triângulo!")
    
//     if(A == B && B == C && C == A){
//         console.log("Classificação: Equilátero por ter os 3 lados iguais")
//     }else if(A == B || A == C || B == C){
//         console.log("Classificação: Isósceles pór ter 2 lados iguais")
//     }else{
//         console.log("Classificação: Escaleno por ter todos os lados diferentes")
//     }

// }else if(isNaN(A) || isNaN(B) || isNaN(C)){
//     console.log("Os valores digitados não correspondem a um número!")
// }else{
// console.log("Os valores digitados não correspondem a um triângulo")
// }

// 7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
// média aritmética desses números.

// let lista = []
// let resposta
// let soma = 0

//  for(let i = 0; i < 3; i++){
//     let numero = Number(prompt("Digite um número: "))
//     lista.push(numero)
//     soma += numero
//     }

// do{
//     if(resposta == 1){
//         let numero = Number(prompt("Digite um número: "))
//         lista.push(numero)
//         soma += numero
    
//     }
//     resposta = Number(prompt("0 - Para || 1 - Continua: "))
// }while(resposta != 0)

// let media = soma / lista.length
// console.log(media.toFixed(2))

// 8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
// um loop for ou while.

// let numero = Number(prompt("DIGITE UM NÚMERO: "))
// let fatorial = 1

// for(let contador = numero; contador >= 2; contador--){
//     fatorial *= contador
//     console.log(fatorial)
// }

// 9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// let numeroAtual = 1
// let numeroAnterior = 0
// let numeroAtualizado

// for(let i = 1; i < 10; i++){
//     numeroAtualizado = numeroAtual + numeroAnterior
//     numeroAnterior = numeroAtual
//     numeroAtual = numeroAtualizado
     
//     console.log(numeroAtual)
// }

// 10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

// let nomes = []
// let contaNomes

//     for(let i = 0; i < 7; i++){
//         let contaNomes = prompt("DIGITE 7 NOMES: ")
//         nomes.push(contaNomes)
//     }

//     console.log(nomes)
//     console.log(nomes.reverse())

// 11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

// let nomes = []
// let idades = []
// let nomeMenores = []
// let idadeMenores = []

// for(let i = 0; i < 3; i++){
//     let perguntaNome = prompt("Digite o seu nome: ")
//     let perguntaIdade = Number(prompt("Digite sua idade: "))
    
//     if(perguntaIdade >= 18){
//         nomes.push(perguntaNome)
//         idades.push(perguntaIdade)
//     }else{
//         nomeMenores.push(perguntaNome)
//         idadeMenores.push(perguntaIdade)
//     }
// }

// console.log(`+18 confirmados: ${nomes} ${idades}`)
// console.log(`-18 confirmados: ${nomeMenores} ${idadeMenores}`)

// 12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
// eretorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
// ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

// function pesoIdeal(sexo,altura){ //Altura em Metros
    
//     let pesoHomem = 72.7 * Number(altura) - 58
//     let pesoMulher = 62.1 * Number(altura) - 44.7

//     if(sexo == "M"){
//         return console.log(pesoHomem.toFixed(2))
//     }else if(sexo == "F"){
//         return console.log(pesoMulher.toFixed(2))
//     }else{
//         console.log("Você digitou algum dado errado..")
//     }
// }

// pesoIdeal("F",1.76)

// 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
// seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// ○ Matrícula:
// ○ Nome:
// ○ Salário bruto:
// ○ Dedução INSS:
// ○ Salário líquido:
// ○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
// redução do INSS).

// let funcionarios = []


// for(let i = 0; i < 2; i++){
//     let perguntaMatricula = Number(prompt("DIGITE O NÚMERO DE MATRÍCULA: "))
//     let perguntaNome = prompt("DIGITE SEU NOME: ")
//     let perguntaSalario = Number(prompt("DIGITE SEU SALÁRIO: "))
//     let INSS = perguntaSalario * 0.12
//     let salarioLiquido = perguntaSalario - INSS
   
//     let tabelaFuncionarios = {
    
//     matricula: perguntaMatricula,
//     nome: perguntaNome,
//     salarioBruto: perguntaSalario,
//     INSS: INSS,
//     salarioLiquido: salarioLiquido
// }

// funcionarios.push(tabelaFuncionarios)
    
// }

// console.log(funcionarios)

// 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
// sobre salário e número de filhos. 
// Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até
// R$350,00.

// let somaSalario = 0
// let somaFilhos = 0
// let totalPessoas = 0
// let maiorSalario = 0
// let salarioDefinido = 0 // até 350
// let continuar

// do{
// let perguntaSalario = Number(prompt("Qual é o seu salário? "))
// let perguntaFilho = Number(prompt("Quantos filhos você tem? "))

// somaSalario += perguntaSalario
// somaFilhos += perguntaFilho
// totalPessoas++

// if(perguntaSalario > maiorSalario){
//     maiorSalario = perguntaSalario
// }

// if(perguntaSalario <= 350){
//     salarioDefinido++
// }

// continuar = prompt("Para continuar digite s ou para parar digite n: ")

// }while(continuar == "s")

//     function mediaSalario(){
//         return Number(somaSalario / totalPessoas)
//     }

//     function mediaFilhos(){
//         return Number(somaFilhos / totalPessoas)
//     }

//     function percentual(){
//         return Number((salarioDefinido / totalPessoas) * 100)
//     }


// console.log("Média de salário:", mediaSalario().toFixed(2))
// console.log("Média de filhos:", mediaFilhos())
// console.log("Maior salário:", maiorSalario.toFixed(2))
// console.log("Percentual até 350:", percentual() + "%")

// 15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
// principal são iguais a 1 e os demais são nulos.

// let tamanho = 10

// for(let linha = 0; linha < tamanho; linha++){

//     let resultado = ""

//     for(let coluna = 0; coluna < tamanho; coluna++){

//         if(linha === coluna){
//             resultado += "1"
//         }else {
//             resultado += "0"
//         }

       
//     }

//      console.log(resultado)
// }

// 16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

// let M = [[1, -2, 3],
//         [1, -2, 3]]

// let C = []
        

// for(let l = 0; l < M.length; l++){
//     let elemNegativos = 0

//     for(let c = 0; c < M.length; c++){
//         if(M[l][c] < 0){
//          elemNegativos++
//          console.log(`N° negativo encontrando: ${M[l][c]} Na posição: [${l}][${c}]`)
//     }
//     }
    
//     C[l] = elemNegativos
    
// }

// 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.

// let pessoa = {
//     nome: "Matheus",
//     idade: 25
// }

// pessoa.email = "mbrunettimacedo@gmail.com"

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.email)

// 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

// let dados = {
    
//     nome: "Matheus",
//     idade: 25,
//     mochila: ["Caderno", "Lápis", "Caneta"],
// }

// function filtrarArrays(objeto){
//     let novoObjeto = {}

//     for(let chave in objeto){
//         if(Array.isArray(objeto[chave])){
//             novoObjeto[chave] = objeto[chave]
//         }
//     }

//     return novoObjeto
// }

// console.log(filtrarArrays(dados))

// 19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm
// precedência sobre as do obj1 em caso de conflitos.