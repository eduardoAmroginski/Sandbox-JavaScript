// Listas Ligadas:
    // Implemente uma lista ligada simples em uma linguagem de programação de sua escolha.
    // Adicione funções para inserir elementos no início e no final da lista.
    // Adicione uma função para remover um elemento específico da lista.



// Classe para representar um nó na lista ligada
class Node {
    constructor(data, next = null) {
        this.data = data; // valor do nó
        this.next = next; // referência ao próximo nó
    }
}

// Classe para representar a lista ligada
class LinkedList {
    constructor() {
        this.head = null; // primeiro nó da lista
    }

    // Método para inserir um nó no início da lista
    insertAtBeginning(data) {
        this.head = new Node(data, this.head);
    }

    // Método para inserir um nó no final da lista
    insertAtEnd(data) {
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    // Método para remover um nó específico da lista
    remove(data) {
        let current = this.head;
        let previous = null;

        while(current != null) {
            if(current.data === data) {
                if(previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                return data;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    // Método para imprimir a lista ligada
    printList() {
        let current = this.head;
        let result = '';
        while(current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

}


// Instancia o objeto LinkedList
const linkedList = new LinkedList();

// Insere no inicio da lista
linkedList.insertAtBeginning(21)
linkedList.insertAtBeginning(5)
linkedList.insertAtBeginning(2)
linkedList.insertAtBeginning(4)
linkedList.insertAtBeginning(7)
linkedList.insertAtBeginning(99)

// Insere no final da lista
linkedList.insertAtEnd(1000)

// Remove um valor especifico
linkedList.remove(2)

// Mostra a lista
linkedList.printList()