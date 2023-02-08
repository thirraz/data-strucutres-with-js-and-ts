class Stack {
  count: number;
  items: any;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: number): void {
    this.items[this.count] = element; //items[count] = element ('count': element)
    this.count++;
  }

  pop(): any {
    if (this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): number | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    /* while(!this.isEmpty()) this.pop() */
  }

  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);

console.log(stack.items);
console.log(stack.toString());

export default Stack;
