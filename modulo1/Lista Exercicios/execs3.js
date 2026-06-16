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

// let inventario = { espada: 1, 
//     pocao: 5, 
//     escudo: 2 };

// for (let item in inventario) {
//     console.log(`${item}: ${inventario[item]}`);
// }

// let itemUsar = "espada"; 
// if (inventario.hasOwnProperty(itemUsar)) {
//     if (inventario[itemUsar] > 0) {
//         inventario[itemUsar]--;
//         console.log(`Usou ${itemUsar}. Restam: ${inventario[itemUsar]}`);
//     } else {
//         console.log("item esgotado");
//     }
// }

// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com 
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor 
// planejado e valor gasto. Use for .in para percorrer as categorias e exibir se cada 
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.  

// let orcamento = {
//     alimentacao: { planejado: 500, gasto: 450 },
//     transporte: { planejado: 200, gasto: 250 },
//     lazer: { planejado: 100, gasto: 150 }
// };

// let saldo = 0;

// for (let cat in orcamento) {
//     let status = (orcamento[cat].gasto <= orcamento[cat].planejado) ? "Dentro" : "Fora";
//     console.log(cat + ": " + status + " do orçamento");
//     saldo = saldo + (orcamento[cat].planejado - orcamento[cat].gasto);
// }

// console.log("Saldo final do mês: " + saldo);

// 6. Crie um array de objetos representando músicas, cada uma com título, artista e 
// duração em segundos. Use for .of para exibir cada música no formato "Artista — 
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no 
// mesmo formato.  

// let musicas = [
//     {titulo: "Musica A", artista: "Artista A", duracao: 200 },
//     {titulo: "Musica B", artista: "Artista B", duracao: 150 }];

// function formatarTempo(segundos) {
//     let min = Math.floor(segundos / 60);
//     let seg = segundos % 60;
//     return min + ":" + (seg < 10 ? "0" + seg : seg);
// }

// for (let musica of musicas) {
//     console.log(musica.artista + " — " + musica.titulo + " (" + formatarTempo(musica.duracao) + ")");
// }

// let duracaoTotal = 0;
// musicas.forEach(function(musica) {
//     duracaoTotal += musica.duracao;
// });

// console.log("Duração total: " + formatarTempo(duracaoTotal));

// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for .of para classificar 
// cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use 
// forEach para calcular e exibir separadamente a média dos aprovados e a média 
// dos reprovados.  

// let alunos = [
//     {nome: "Ana", nota: 9 },
//     {nome: "Bruno", nota: 5 },
//     {nome: "Carlos", nota: 3 },
//     {nome: "Diana", nota: 7 },
//     {nome: "Eduardo", nota: 4 },
//     {nome: "Fernanda", nota: 8 }
// ];


// for (let aluno of alunos) {
//     let status;
//     if (aluno.nota >= 7) {
//         status = "Aprovado";
//     } else if (aluno.nota >= 5) {
//         status = "Recuperação";
//     } else {
//         status = "Reprovado";
//     }
//     console.log(aluno.nome + ": " + status + " (Nota: " + aluno.nota + ")");
// }

// let somaAprovados = 0;
// let countAprovados = 0;
// let somaReprovados = 0;
// let countReprovados = 0;

// alunos.forEach(function(aluno) {
//     if (aluno.nota >= 7) {
//         somaAprovados += aluno.nota;
//         countAprovados++;
//     } else if (aluno.nota < 5) {
//         somaReprovados += aluno.nota;
//         countReprovados++;
//     }
// });

// function exibirMedia(soma, count, label) {
//     if (count > 0) {
//         console.log("Média dos " + label + ": " + (soma / count));
//     } else {
//         console.log("Nenhum aluno " + label + " para calcular média.");
//     }
// }

// exibirMedia(somaAprovados, countAprovados, "Aprovados");
// exibirMedia(somaReprovados, countReprovados, "Reprovados");

// 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
// Use forEach para calcular o valor total em estoque de cada produto (preço ×
// quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
// estoque. 

// let produtos = [
//     {nome: "Mouse", preco: 50, quantidade: 10},
//     {nome: "Teclado", preco: 150, quantidade: 5},
//     {nome: "Monitor", preco: 800, quantidade: 2}
// ];

// let valorTotalGeral = 0;

// console.log("--- Relatório de Estoque ---");

// produtos.forEach(function(produto) {
//     let valorTotalProduto = produto.preco * produto.quantidade;
//     valorTotalGeral = valorTotalGeral + valorTotalProduto;
    
//     console.log("Produto: " + produto.nome + " | Total em estoque: R$ " + valorTotalProduto);
// });

// console.log("Valor total geral do estoque: R$ " + valorTotalGeral);

// 9. Crie um array de objetos onde cada objeto representa um contato com nome, 
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita 
// buscar um contato pelo nome usando for .of e exiba os dados encontrados ou 
// uma mensagem de "não encontrado". 

// let contatos = [
//     {nome: "Ana", telefone: "1234-5678", email: "ana@email.com"},
//     {nome: "Beto", telefone: "2224-2628", email: "beto@email.com"},
//     {nome: "Caio", telefone: "3333-3333", email: "caio@email.com"}
// ];

// console.log("--- Lista de Contatos ---");
// contatos.forEach(function(c) {
//     console.log("Nome: " + c.nome + " | Tel: " + c.telefone + " | E-mail: " + c.email);
// });

// function buscarContato(nomeBusca) {
//     let encontrado = null;
    
//     for (let c of contatos) {
//         if (c.nome === nomeBusca) {
//             encontrado = c;
//             break; 
//         }
//     }
    
//     if (encontrado) {
//         console.log("Contato encontrado: " + encontrado.nome + " - " + encontrado.telefone);
//     } else {
//         console.log("Contato não encontrado");
//     }
// }

// buscarContato("Beto");
// buscarContato("Zeca");

// 10. Implemente uma pilha usando um array para simular o histórico de um 
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() 
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a 
// cada operação. 

// let historico = [];

// function visitar(pagina) {
//     historico.push(pagina);
//     console.log("Visitou: " + pagina);
// }

// function voltar() {
//     if (historico.length > 0) {
//         historico.pop();
//         console.log("Voltou uma página.");
//     } else {
//         console.log("Histórico vazio, não há para onde voltar.");
//     }
// }

// function paginaAtual() {
//     if (historico.length > 0) {
//         return historico[historico.length - 1];
//     } else {
//         return "Nenhuma página no histórico.";
//     }
// }

// visitar("google.com");
// visitar("github.com");
// visitar("udemy.com");
// visitar("stackoverflow.com");
// console.log("Página atual: " + paginaAtual());

// voltar();
// console.log("Página atual após voltar: " + paginaAtual());

// voltar();
// console.log("Página atual após voltar: " + paginaAtual());

// 11. 
// Implemente uma fila usando um array para simular o atendimento de uma 
// clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo() 
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, 
// exibindo o estado da fila a cada operação. 

// let fila = [];

// function chegarPaciente(nome) {
//     fila.push(nome);
//     console.log("Paciente " + nome + " chegou à fila.");
// }

// function chamarProximo() {
//     if (fila.length > 0) {
//         let atendido = fila.shift();
//         console.log("Atendendo: " + atendido);
//     } else {
//         console.log("A fila está vazia.");
//     }
// }

// function exibirFila() {
//     console.log("Estado atual da fila: [" + fila.join(", ") + "]");
// }

// chegarPaciente("Alice");
// chegarPaciente("Bruno");
// chegarPaciente("Carlos");
// chegarPaciente("Diana");
// chegarPaciente("Eduardo");
// exibirFila();
// chamarProximo();
// exibirFila();
// chamarProximo();
// exibirFila();
// chamarProximo();
// exibirFila();

// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as 
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós. 
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e 
// exiba a lista antes e depois.  

// function No(valor) {
//     this.valor = valor;
//     this.proximo = null;
// }

// function ListaLigada() {
//     this.head = null;

   
//     this.adicionar = function(valor) {
//         let novoNo = new No(valor);
//         if (!this.head) {
//             this.head = novoNo;
//         } else {
//             let atual = this.head;
//             while (atual.proximo) {
//                 atual = atual.proximo;
//             }
//             atual.proximo = novoNo;
//         }
//     };

   
//     this.remover = function(valor) {
//         if (!this.head) return;

//         if (this.head.valor === valor) {
//             this.head = this.head.proximo;
//             return;
//         }

//         let atual = this.head;
//         while (atual.proximo && atual.proximo.valor !== valor) {
//             atual = atual.proximo;
//         }

//         if (atual.proximo) {
//             atual.proximo = atual.proximo.proximo;
//         }
//     };

//     this.exibir = function() {
//         let atual = this.head;
//         let resultado = "";
//         while (atual) {
//             resultado += atual.valor + " -> ";
//             atual = atual.proximo;
//         }
//         console.log(resultado + "null");
//     };
// }

// let gerenciador = new ListaLigada();
// gerenciador.adicionar("Estudar JS");
// gerenciador.adicionar("Fazer lista");
// gerenciador.adicionar("Praticar CSS");
// gerenciador.adicionar("Revisar HTML");

// console.log("Lista antes da remoção:");
// gerenciador.exibir();

// gerenciador.remover("Fazer lista");

// console.log("Lista depois da remoção:");
// gerenciador.exibir();