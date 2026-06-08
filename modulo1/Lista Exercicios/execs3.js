let prompt = require('prompt-sync')()
// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

// let produto = {
// nome: "Computador",
// preco: 1000,
// categoria: "Eletrônicos",
// quantidade: 5
// }

// produto.desconto = produto.preco * 0.10
// produto.precoFinal = produto.preco - produto.desconto

// console.log(O preço final do produto é R$${produto.precoFinal.toFixed(2)})

// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

// let barbaro = {
// nome: "Barbaro",
// forca: 200,
// vida: 7000,
// ataque: 550,
// defesa: 120
// }

// let paladino = {
// nome: "Paladino",
// forca: 180,
// vida: 5500,
// ataque: 470,
// defesa: 330
// }

// for(let chave in barbaro && paladino){
// console.log(${chave} ${barbaro[chave]} || ${paladino[chave]})
// }

// function somarAtributos(objeto){
// return objeto.vida + objeto.ataque + objeto.defesa
// }

// let atributosBarbaro = somarAtributos(barbaro)
// let atributosPaladino = somarAtributos(paladino)

// if(atributosBarbaro > atributosPaladino){
// console.log("O Bárbaro é mais forte!")
// }else{
// console.log("O Paladino é mais forte")
// }

// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.

// let funcionario = {
// nome: "Matheus",
// cargo: "TI",
// salario: 2500,
// experiencia: 1
// }

// for(dados in funcionario){
// console.log(${dados} : ${funcionario[dados]})
// }

// let salario = funcionario.salario

// function bonus(experiencia){
// if(experiencia < 3){
// let bonus = salario + (salario * 0.05)
// console.log(`sem 5% - ${salario} || com 5% - ${bonus} `)
// }else if(experiencia >= 3 && experiencia <= 5){
// let bonus = salario + (salario * 0.10)
// console.log(`sem 10% - ${salario} || com 10% - ${bonus} `)
// }else{
// let bonus = salario + (salario * 0.15 )
// console.log(`sem 15% - ${salario} || com 15% - ${bonus} `)
// }
// }

// bonus(15)

// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

console.clear()
let inventario = {

 druida: {
 espada: 1,
 escudo: 2,
 armadura: 5,
"poções": 8,
 rubi: 3
 }

}

for(inv in inventario){
 console.clear()
 console.log(`${inv}: `)
}

for(let item in inventario[inv]){
 console.log(item)
}
let item = prompt("Digite um item: ")
console.log(inventario.druida.hasOwnProperty(item))