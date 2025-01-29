class Animal {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`This ${this.name} can Move at ${speed} Kmh`);
  }

}

class Rabbit extends Animal {
  constructor(name, age, runSpped) {
    super(name, age);
    this.runSpped = runSpped;
  }

  run() {
    console.log(`This ${this.name} can run at ${this.runSpped}`);
    super.move(this.runSpped);
  }

}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

}

const rabbit = new Rabbit("BugsBunny", 1, 25);
rabbit.run();
const fish = new Fish("Nimo", 2, 35);
