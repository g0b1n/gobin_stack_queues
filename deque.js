
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.sixe = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    pushFront(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    pushBack(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    popFront() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
          const removedValue = this.head.value;
          if (this.size === 1) {
            this.head = null;
            this.tail = null;
          } else {
            this.head = this.head.next;
            this.head.prev = null;
          }
          this.size--;
          return removedValue;
    }

    popBack() {
        if (this.isEmpty()) {
          throw new Error("Deque is empty");
        }
        const removedValue = this.tail.value;
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
        }
        this.size--;
        return removedValue;
    }

    front() {
        if (this.isEmpty()) {
          throw new Error("Deque is empty");
        }
        return this.head.value;
    }
    
    back() {
        if (this.isEmpty()) {
          throw new Error("Deque is empty");
        }
        return this.tail.value;
    }
}