class User {
  static userCount = 0;
  constructor(userName) {
    this.userName = userName;
    User.userCount++;

  }
}

const user1 = new User("Sayan");
console.log(user1.userName);