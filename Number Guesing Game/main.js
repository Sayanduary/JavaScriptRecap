let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum) + minNum)

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a Number between ${minNum} to ${maxNum}`)
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please Enter a Valid Number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Guess the Number 1 to 100 please");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too Low");
    } else if (guess > answer) {
      window.alert("Too High");
    } else {
      window.alert(`Currect The Answer was ${answer}`);
      running = false;
    }
  }

}