let person = {
  fullName: "Sayan Duary",
  age: 24,
  isStudent: true,
  hobbies: ["Music,fa,ufs"],
  address: {
    street: "R.N.C Road East",
    city: "Kolkata",
    country: "India"
  }
}

console.log(person.address, person.hobbies)

for (let property in person) {
  console.log(person[property])
}


class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}


class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Sayan", 24, "Rnc road", "kolkata", "India");
console.log(person1.address)