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
class Queue {
  constructor(x){
    this.value = x;
    this.next = null;
   }

  getUnderlyingList() {
    
  }

  enqueue(value) {
    if (this.next === null){
      this.next = new Queue(value);
    } else {
      let current = this.next;
      while (current.next){
          current = current.next;
      }
      current.next = new Queue(value);
      };
    }

  dequeue() {
    
  }
}

module.exports = {
  Queue
};
