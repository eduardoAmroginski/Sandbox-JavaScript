// Pilhas e Filas:
    // Implemente uma pilha usando uma lista ligada.
    // Implemente uma fila usando duas pilhas.



// Classe para representar uma pilha
class Stack {
    constructor() {
        this.items = []; // array para armazenar os elementos da pilha
    }

    // Método para adicionar um elemento no topo da pilha
    push(element) {
        this.items.push(element);
    }

    // Método para remover um elemento do topo da pilha
    pop() {
        if(this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // Método para imprimir a pilha
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}


// Classe para representar uma fila usando duas pilhas
class Queue {
    constructor() {
        this.stack1 = []; // primeira pilha
        this.stack2 = []; // segunda pilha
    }

    // Método para adicionar um elemento no final da fila
    enqueue(element) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(element);
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
    }

    // Método para remover um elemento do início da fila
    dequeue() {
        if (this.stack1.length == 0) {
            return 'Queue is empty';
        }
        return this.stack1.pop();
    }

    // Método para imprimir a fila
    printQueue() {
        let str = "";
        for (let i = 0; i < this.stack1.length; i++)
            str += this.stack1[i] + " ";
        return str;
    }

}


// Testando a Classe Stack
let stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');
stack.push('E');
stack.pop();
console.log("Pilha: ", stack.printStack());  // Saída: A B C


// Testando a Classe Queue
let queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');
queue.dequeue();
console.log("Fila: ", queue.printQueue());  // Saída: A B C