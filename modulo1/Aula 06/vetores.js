//valores -  2 5 1 6 1
//indice  -  0 1 2 3 4
// let numeros = [2, 5, 1, 6, 1]
// console.log(numeros.length) //verifica quantas posições tem o array
// let frutos = ["maça", "banana", "abacaxi"]
// let vazio = []

// vazio[1] = 5 //adiciona o valor na posição do indice indicado
// vazio[0] = 30

// vazio.push(50) //adiciona no fim do vetor
// frutos.push("uva", "amendoa", "melancia")
// frutos.pop() //exclui o ultimo valor
// frutos.unshift("uva") //adiciona o valor no inicio do vetor

// console.log(numeros)
// console.log(frutos)
// console.log(vazio)

// console.log(numeros[0])

// for(let posicoes = 0; posicoes < 5; posicoes++){
//     console.log("A posição é: " + posicoes + " tem o valor: " + numeros[posicoes])
// }

// for(let posicoes = 0; posicoes < numeros.length; posicoes++){
//     console.log("A posição é: " + posicoes + " tem o valor: " + numeros[posicoes])
// }

// for(let posicoes = 0; posicoes < numeros.length; posicoes++){
//     console.log(`A posição ${posicoes} tem o valor ${numeros[posicoes]}`)
// }
// esse uso de `` e ${} tem o nome de templateString
//As crases ` ` delimitam um template literal.
//A parte ${} é chamada de interpolação (expression interpolation).

// numeros.forEach(function(numeros){
//     console.log(numeros)
// })

// for(let posicoes in numeros){
//     console.log(numeros[posicoes])
// }
//forEach vai percorrer por todos os valores, e mostrar pra nós
//for in vai percorrer por todos os vetores