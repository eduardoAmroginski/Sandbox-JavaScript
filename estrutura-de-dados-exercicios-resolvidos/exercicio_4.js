// Grafos:
    // Implemente um grafo usando uma matriz de adjacência.
    // Implemente a busca em profundidade e a busca em largura no grafo.



// Classe para representar um grafo
class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices; // número de vértices
        this.AdjList = new Map(); // lista de adjacências para representar o grafo
    }

    // Método para adicionar um vértice no grafo
    addVertex(v) {
        this.AdjList.set(v, []);
    }

    // Método para adicionar uma aresta no grafo
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    // Método para imprimir o grafo
    printGraph() {
        let get_keys = this.AdjList.keys();
        for (let i of get_keys) {
            let get_values = this.AdjList.get(i);
            let conc = "";
            for (let j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }
}


// Instancia o objeto Graph, com no maximo 10 vertices, alterar o valor para adicionar ou diminuir
const grafo = new Graph(10)

// Adiciona os vertices
grafo.addVertex(1)
grafo.addVertex(2)
grafo.addVertex(3)
grafo.addVertex(4)
grafo.addVertex(5)
grafo.addVertex(6)
grafo.addVertex(7)
grafo.addVertex(8)
grafo.addVertex(9)
grafo.addVertex(10)

// Adiciona as arestas
grafo.addEdge(1, 2)
grafo.addEdge(1, 3)
grafo.addEdge(1, 4)
grafo.addEdge(4, 5)
grafo.addEdge(7, 1)
grafo.addEdge(2, 6)
grafo.addEdge(8, 2)
grafo.addEdge(10, 9)
grafo.addEdge(9, 5)
grafo.addEdge(6, 1)

// Mostra o Grafico
grafo.printGraph()