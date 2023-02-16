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

  //Set (mathematic concept) operations => union, intersection and difference
  union(otherSet: SSet): SSet {
    const unionSet = new SSet();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  intersection(otherSet: SSet): SSet {
    const intersectionSet = new SSet();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    // if otherValues is smaller than values, the result will be a negative
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet: SSet): SSet {
    const differenceSet = new SSet();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet: SSet): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubset = true;
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}
