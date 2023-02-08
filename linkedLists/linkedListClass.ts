import { defaultEquals } from "../util";

import { Node } from "../models/linked-list-models";

export default class LinkedList {
  count: number;
  head: any;
  equalsFn: any;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn;
  }

  push(element: any) {
    const node = new Node(element);
    let current;
    if (this.head == null) this.head = node;
    current = this.head;
    while (current.next != null) current = current.next;

    current.next = node;

    this.count++;
  }
}
