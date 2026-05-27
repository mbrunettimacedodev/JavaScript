// 1 - Função sem parâmetros e sem retorno: Criar uma função simples que exiba uma
// mensagem de saudação.
// Instruções:
// ● Criar uma função chamada saudacao que não recebe parâmetros;
// ● Ex: A função deve exibir no console a mensagem "Olá, bem-vindo ao nosso sistema!";
// ● Chamar a função para que a saudação seja exibida.
// 2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
// e retorne a soma, subtração, multiplicação e divisão desses números.
// Instruções:
// ● Criar uma função chamada soma que recebe dois parâmetros (a e b);
// ● A função deve retornar a soma dos dois parâmetros;
// ● Chamar a função passando dois números como argumentos e exibir o resultado no
// console.

// 2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
// e retorne a soma, subtração, multiplicação e divisão desses números.
// Instruções:
// ● Criar uma função chamada soma que recebe dois parâmetros (a e b);
// ● A função deve retornar a soma dos dois parâmetros;
// ● Chamar a função passando dois números como argumentos e exibir o resultado no
// console.

//Exercício 1
function saudacao(){
    console.log("Olá, bem-vindo ao nosso sistema!")
}

saudacao()

//Exercício 2

function operacoes(a,b){
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a / b

    // console.log(`Soma: ${soma}`)
    // console.log(`subtração: ${subtracao}`)
    // console.log(`Multiplicação: ${multiplicacao}`)
    // console.log(`Divisão: ${divisao}`)

    return soma
    return subtracao
    return multiplicacao
    return divisao
}
// operacoes(1,2)
console.log(operacoes(1,2))



