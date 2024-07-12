class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (val) => val !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (val) => val !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((adjacentVertex) =>
      this.removeEdge(vertex, adjacentVertex)
    );
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Seoul");
graph.addVertex("Tokyo");
graph.addVertex("New York");
graph.addVertex("Paris");
graph.addVertex("Barcelona");
console.log(graph);

graph.addEdge("Seoul", "Tokyo");
graph.addEdge("Paris", "Barcelona");
graph.addEdge("New York", "Seoul");
graph.addEdge("Seoul", "Paris");
console.log(graph);

graph.removeEdge("Seoul", "Paris");
console.log(graph);

graph.removeVertex("Seoul");
console.log(graph);
