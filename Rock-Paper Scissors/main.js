
function playGame(playerChoice) {

  const choices = ['rock', 'paper', 'scissors'];

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];



  document.getElementById('playerDisplay').textContent = `PLAYER: ${playerChoice}`;

  document.getElementById('computerDisplay').textContent = `COMPUTER: ${computerChoice}`;



  let result = '';

  if (playerChoice === computerChoice) {

    result = 'It\'s a tie!';

  } else if (

    (playerChoice === 'rock' && computerChoice === 'scissors') ||

    (playerChoice === 'paper' && computerChoice === 'rock') ||

    (playerChoice === 'scissors' && computerChoice === 'paper')

  ) {

    result = 'You win!';


  } else {

    result = 'You lose!';

  }



  const resultDisplay = document.getElementById('resultDisplay');
  resultDisplay.textContent = result;


}
