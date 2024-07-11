class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return newNode;
    }

    let currentNode = this.root;
    while (true) {
      if (newNode.value === currentNode.value) return undefined;
      if (newNode.value > currentNode.value) {
        if (!currentNode.rightChild) {
          currentNode.rightChild = newNode;
          return newNode;
        } else {
          currentNode = currentNode.rightChild;
        }
      }
      if (newNode.value < currentNode.value) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = newNode;
          return newNode;
        } else {
          currentNode = currentNode.leftChild;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return currentNode;
      if (value > currentNode.value) {
        if (currentNode.rightChild) {
          currentNode = currentNode.rightChild;
        } else {
          return undefined;
        }
      }
      if (value < currentNode.value) {
        if (currentNode.leftChild) {
          currentNode = currentNode.leftChild;
        } else {
          return undefined;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();

console.log(bst);
console.log(bst.insert(3));
console.log(bst.insert(1));
console.log(bst.insert(2));
console.log(bst.insert(0));
console.log(bst.insert(7));
console.log(bst.insert(5));
console.log(bst.insert(10));
console.log(bst.insert(10));
console.log(bst);
/**
 *         3
 *     1        7
 *  0    2    5    10
 */
console.log(bst.find(1));
