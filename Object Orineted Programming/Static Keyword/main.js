// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2
//   }

//   static getCircumstances(radius) {
//     return 2 * this.PI * radius
//   }

//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(2));
// console.log(MathUtil.getCircumstances(2))
// console.log(MathUtil.getArea(20))

class User {
  static userCount = 0;
  constructor(userName) {
    this.userName = userName;
    User.userCount++;

  }
  static getUserAccount() {
    console.log(`There are ${User.userCount} users online`)
  }
  sayHello() {
    console.log(`Hello My User Name is ${this.userName}`)
  }
}

const user1 = new User("Sayan");
const user2 = new User("Duary")
console.log(user1.userName);

user2.sayHello()

User.getUserAccount()