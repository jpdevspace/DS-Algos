class RecentCounter {
  counter: number[];

  constructor(counter = []) {
      this.counter = counter;
  }

  ping(t: number): number {
    this.counter.push(t);

    
  }
}


const obj = new RecentCounter();

obj.ping(t);