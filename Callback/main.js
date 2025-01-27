function Hello(callback) {
  console.log("hello!");
  callback();
}

function Goodbye() {
  console.log("GoodBye!");
}

Hello(Goodbye);
