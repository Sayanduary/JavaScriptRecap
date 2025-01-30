// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.log("Enter Valid Number");
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.log("Enter Valid Number");
//     }
//   }
//   get width() {
//     return this._width;
//   }
//   get height() {
//     return this._height;
//   }
//   get Area() {
//     return (this._height * this._width).toFixed(2);
//   }
// }

// const Rec = new Rectangle(10, 20);
// Rec.width = 6;
// Rec.height = 9;
// console.log(Rec.width)
// console.log(Rec.Area)


class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFisrtName) {
    if (typeof newFisrtName === "string" && newFisrtName.length > 0) {
      this._firstName = newFisrtName;
    } else {
      console.error("First Name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last Name must be a non-empty string")
    }
  }
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Enter Valid Age");
    }
  }
  get firstName() {

    return this._firstName;
  }

  get lastName() {

    return this._lastName;
  }

  get age() {
    return this._age;
  }

}

const person1 = new Person("Sayan", "Duary", 10);
console.log(person1.firstName, person1.age)