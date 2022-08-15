/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */
 
class Queue {
 /* items: number[];
  constructor(...params: number[]) {
    this.items = [...params];
  }
 // constructor(items: number[]) {
 //   this.items = items;
 // }
  add(n: number) {
    return this.items.push(n)
  }
  remove() {
    return this.items.shift();
  }
  getItems(){
    return this.items
  }*/

  queue: number[] =  [];

  add(n: number) {
     return this.queue.push(n)
  }

  remove() {
     return this.queue.shift();
  }

  getItems(){
    return this.queue
  }
}

export { Queue };
