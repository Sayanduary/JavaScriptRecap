// function outer() {
//   function inner() {
//     console.log("Hello World");
//   }
//   inner()
// }
// outer()

// function createACounter() {
//   let count = 0;
//   function increment() {

//     count++;
//     console.log(count);
//   }

//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }

// const counter = createACounter();
// counter.increment()
// counter.increment()
// console.log(`The Count: ${counter.getCount()}`)



function createGame() {
  let score = 0;
  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`+${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(10);
game.decreaseScore(5);

console.log(game.getScore());