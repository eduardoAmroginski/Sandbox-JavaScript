// Árvores:
    // Implemente uma árvore binária e adicione funções para inserir e buscar elementos.
    // Implemente a travessia em ordem, pré-ordem e pós-ordem na árvore binária.


// Classe para representar um nó na árvore binária
class Node {
    constructor(data) {
        this.data = data; // valor do nó
        this.left = null; // filho à esquerda
        this.right = null; // filho à direita
    }
}

// Classe para representar a árvore binária
class BinaryTree {
    constructor() {
        this.root = null; // raiz da árvore
    }

    // Método para inserir um nó na árvore
    insert(data) {
        let newNode = new Node(data);
        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Método auxiliar para inserir um nó na árvore
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Método para realizar a travessia em ordem na árvore
    inorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Método para imprimir a árvore binária em formato de árvore
    printTree(node, prefix = "", isLeft = true) {
        if(node != null) {
            this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
            console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
            this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

}

// Testando o código
let tree = new BinaryTree();
tree.insert('F');
tree.insert('B');
tree.insert('A');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');
tree.insert('J');
tree.printTree(tree.root);