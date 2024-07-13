class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    const child = this.values[childIdx];
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      const parent = this.values[parentIdx];
      if (child > parent) {
        this.values[childIdx] = parent;
        this.values[parentIdx] = child;
        childIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  extractMax() {
    const max = this.values[0];
    if (this.values.length) {
      this.values[0] = this.values.pop();
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let parentIdx = 0;
    const length = this.values.length;
    const parent = this.values[0];

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > parent) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild > parent) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;

      this.values[parentIdx] = this.values[swapIdx];
      this.values[swapIdx] = parent;
      parentIdx = swapIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(42);
heap.insert(29);
heap.insert(18);
heap.insert(14);
heap.insert(7);
heap.insert(18);
heap.insert(35);
console.log(heap); // 42, 19, 35, 14, 7, 18, 29
console.log(heap.extractMax()); // 42
console.log(heap); // 35, 29, 18, 14, 7, 18
