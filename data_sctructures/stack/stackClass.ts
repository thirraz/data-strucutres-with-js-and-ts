class Stack {
  items: number[] = [];
  constructor() {
    this.items = [];
  }

  push(element: number): void {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log(stack.peek());

stack.push(11);

console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

export default 1;
