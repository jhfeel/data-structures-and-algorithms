// 최소 이진 힙을 통한 우선순위 큐 구현
class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.nodes.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.nodes.length - 1;
    const child = this.nodes[childIdx];
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      const parent = this.nodes[parentIdx];
      if (child.priority < parent.priority) {
        this.nodes[childIdx] = parent;
        this.nodes[parentIdx] = child;
        childIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  dequeue() {
    const minNode = this.nodes[0];
    if (this.nodes.length) {
      this.nodes[0] = this.nodes.pop();
      this.bubbleDown();
    }
    return minNode;
  }

  bubbleDown() {
    let parentIdx = 0;
    const parent = this.nodes[0];
    const length = this.nodes.length;

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.nodes[leftChildIdx];
        if (leftChild.priority < parent.priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.nodes[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < parent.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;

      this.nodes[parentIdx] = this.nodes[swapIdx];
      this.nodes[swapIdx] = parent;
      parentIdx = swapIdx;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

let pq = new PriorityQueue();
pq.enqueue("B", 2);
pq.enqueue("F", 5);
pq.enqueue("A", 1);
pq.enqueue("C", 3);
pq.enqueue("D", 4);
console.log(pq); // A C B F D
console.log(pq.dequeue()); // A
console.log(pq); // B C D F
