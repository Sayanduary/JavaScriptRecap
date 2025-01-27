// No Method Chaining--->
// let userName = window.prompt("Enter Your UserName");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase()

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();

// userName = letter + extraChars;
// console.log(userName);

// Using Method Chaining--->

let userName = window.prompt("Enter Your UserName");
userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
console.log(userName);