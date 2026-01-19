class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) curr = curr.next;
    return curr.val;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = newNode;
    }
    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);

    const newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) this.head = this.head.next;
    else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) curr = curr.next;
      curr.next = curr.next.next;
    }
    this.size--;
  }
}
