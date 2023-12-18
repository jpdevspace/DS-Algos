/*
  First In
  First Out

  The head is the first in and the first out

  tail -> node -> node -> node -> head 

*/
 
class Node {
  data: number | null;
  next: Node | null;

  constructor(data: number | null = null, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  public length: number;
  private head: Node | null; // Remove things from the head
  private tail: Node | null; // We add things to the tail

  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  // Add to the back of the line
  enqueue(data: number): void {
    const newNode = new Node(data, null);

    if (this.tail != null) {
      this.tail.next = newNode;
    }
    
    this.tail = newNode;
    
    // If there's no head... 
    if (this.head != null) {
      this.head = newNode;
    }
  }

  // Remove (serve someone) return its data
  deque(): number | null {
    if (this.head) {
      const data = this.head.data; // Store the data to return
      this.head = this.head.next; // Move the head to the next person

      return data;
    } else {
      this.tail = null; // Empty the queue
      return null
    }
  }

  // Who's the next person to be served? show me the head
  peek(): Node | null {
    if (this.head) { return this.head }
    return null;
  }

  isEmpty(): boolean {
    return this.head == null || this.tail == null;
  } 
}

export {};