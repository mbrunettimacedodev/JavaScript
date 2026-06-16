// 1. Desenhando um sistema de impressão (Fila de Impressão)
// Instruções:
// ● Criar uma fila que simula o processo de uma fila de impressão;
// ● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
// ● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
// ● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila.

class FilaDeImpressao {
    constructor() {
        this.fila = [];
    }

    adicionar(tarefa) {
        this.fila.push(tarefa);
        console.log(`Tarefa adicionada: ${tarefa}`);
    }

    processar() {
        if (this.fila.length === 0) {
            console.log("Não há mais tarefas na fila.");
            return;
        }

        const tarefaSendoImpressa = this.fila.shift(); 
        console.log(`Imprimindo: ${tarefaSendoImpressa}`);
    }

    estaVazia() {
        return this.fila.length === 0;
    }
}

// Simulação
const impressora = new FilaDeImpressao();
impressora.adicionar("Documento 1");
impressora.adicionar("Documento 2");

impressora.processar();
impressora.processar();
impressora.processar(); // Vai informar que está vazia.

// 2. Implementação de deque
// Instruções:
// ● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
// ● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
// ● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.

// class Deque {
//     constructor() {
//         this.itens = {};
//         this.inicio = 0;
//         this.fim = 0;
//     }

//     addFront(element) {
//         if (this.isEmpty()) {
//             this.addBack(element);
//         } else {
//             this.inicio--;
//             this.itens[this.inicio] = element;
//         }
//     }

//     addBack(element) {
//         this.itens[this.fim] = element;
//         this.fim++;
//     }

//     removeFront() {
//         if (this.isEmpty()) return undefined;
//         const result = this.itens[this.inicio];
//         delete this.itens[this.inicio];
//         this.inicio++;
//         return result;
//     }

//     removeBack() {
//         if (this.isEmpty()) return undefined;
//         this.fim--;
//         const result = this.itens[this.fim];
//         delete this.itens[this.fim];
//         return result;
//     }

//     peekFront() { return this.itens[this.inicio]; }
//     peekBack() { return this.itens[this.fim - 1]; }
//     isEmpty() { return this.size() === 0; }
//     size() { return this.fim - this.inicio; }
// }


// const meuDeque = new Deque();
// meuDeque.addBack("Item A");
// meuDeque.addFront("Item B");
// console.log("Estado atual:", meuDeque.itens);

// meuDeque.removeFront();
// console.log("Após remover do início:", meuDeque.itens);

// meuDeque.removeBack();
// console.log("Após remover do final, está vazio?", meuDeque.isEmpty());
