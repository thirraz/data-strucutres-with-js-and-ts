class SSet {
  items: any;
  constructor() {
    this.items = {};
  }

  has(element: number | string) {
    return element in this.items;
  }
}
