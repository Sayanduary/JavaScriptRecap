

function rollDice() {
  const numOfDice = document.getElementById("inputText").value;
  const diceResult = document.getElementById("diceResult")
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const val = Math.floor(Math.random() * 6) + 1;
    values.push(val);
    images.push(`<img src="diceImages/${val}.png">`)


  }
  diceResult.textContent = `dice:${values.join(', ')}`;
  diceImages.innerHTML = images.join('');

}