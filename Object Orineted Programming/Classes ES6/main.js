class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product : ${this.name}`);
    console.log(`Price : ${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax = 0.05) {
    return `${this.name} Price Will be ${this.price + (this.price + salesTax)}`;
  }
}


const product1 = new Product("Toothpaste", 120);
const product2 = new Product("Shirts", 599.);


product1.displayProduct();
product2.displayProduct()
const total = product1.calculateTotal()
console.log(total)
console.log(product2.calculateTotal())