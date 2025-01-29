class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`This ${this.name} is Running`);
  }
}

class Fish extends Animal {
  name = "Fish";
  swim(){
    console.log(`This ${this.name} is Swimming`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
rabbit.eat()
fish.eat()
rabbit.run()