import { Queue } from "./classQueue";

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");
console.log(queue.toString());

queue.enqueue("Camila");

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue(); //delete John
queue.dequeue(); //delete Jack
console.log(queue.toString());
