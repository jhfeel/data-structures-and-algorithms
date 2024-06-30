class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.length--;
    if (this.length > 0) {
      this.tail = prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, newValue) {
    const targetNode = this.get(index);
    if (targetNode) {
      targetNode.value = newValue;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(index - 1);
    const targetNode = prevNode.next;
    prevNode.next = targetNode.next;

    this.length--;
    return targetNode;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
      let temp = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = temp;
    }
    let temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    return this;
  }

  // 연결 리스트를 배열로 출력
  print() {
    var arr = [];
    var cur = this.head;
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }
    console.log(arr);
  }
}

const sll = new SinglyLinkedList();

sll.push("a");
sll.push("b");
sll.push("c");
sll.push("d");
