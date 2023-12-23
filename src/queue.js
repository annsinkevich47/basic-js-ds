const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.queue = [];
    this.head = null;
    this.length = 0;
  }
  

  getUnderlyingList() {
    for (let i = 0; i < this.queue.length; i++) {
        if (this.length == 0) {
          this.head = new Node(this.queue[i]);
        } else {
          let current = this.head;
    
          while(current.next) {
            current = current.next;
          }
    
          current.next = new Node(this.queue[i]);
        }
    
        this.length++;

    }
    return this.head;
  }

  enqueue(value) {
    return this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = {
  Queue
};
