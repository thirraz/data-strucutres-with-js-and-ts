export class SSet {
  items: any;
  constructor() {
    this.items = {};
  }

  has(element: number | string) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element: number | string): boolean {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element: number | string): boolean {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear(): void {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  sizeLegacy(): number {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  values() {
    // First way ==> return Object.values(this.items);
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }
}
