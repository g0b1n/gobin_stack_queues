
// QUEUE //

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        } else {
            throw new Error("Queue is empty");
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.queue[0];
        } else {
            throw new Error("Queue is empty");
        }
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// STACK //

class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop();
        } else {
            throw new Error("Stack is empty");
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        } else {
            throw new Error("Stack is empty");
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}