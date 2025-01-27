let loggedIn = false;
let userName;
let password;

while (!loggedIn) {
  userName = window.prompt("Enter Your UserName");
  password = window.prompt("Enter Your Password");

  if (userName === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are Logged In");
    
  } else {
    console.log("Invalid Credentials");
  }
}