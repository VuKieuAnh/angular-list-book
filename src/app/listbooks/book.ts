export class Book {
  id: any;
  name: string;
  price: number;

  // @ts-ignore
  constructor() {

  }

  // @ts-ignore
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// @ts-ignore
export let book1 = new Book(1, 'Book', 100);
