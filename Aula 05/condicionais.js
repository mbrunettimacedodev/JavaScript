/*se(condição == verdade){
    faça tal coisa
}
*/

//Código sequencial é linha a linha
//Essa é condicional

let media = 9

if(media >= 6){
    console.log("Aprovado")
    if(media == 10){
        console.log("Conceito A")
    }else if(media >= 8 && media < 10){
        console.log("Conceito B")
    }
}else if(media < 6){
    console.log("Reprovado")
}

