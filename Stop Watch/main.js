
const flipper = document.querySelector('.flipper');
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let laps = [];

// Flip card when clicked
flipper.addEventListener('click', function () {
  this.classList.toggle('flipped');
});

// Prevent flip when clicking buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    document.querySelector('.front').classList.add('running');
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
    document.querySelector('.front').classList.remove('running');
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
  document.querySelector('.front').classList.remove('running');
  // Clear lap times
  laps = [];
  document.querySelector('.lap-times').innerHTML = '';
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  milliseconds = String(milliseconds).padStart(2, '0');

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// Enhanced lap function with current time
function addLap() {
  if (isRunning || elapsedTime > 0) {
    const lapList = document.querySelector('.lap-times');
    const lapCount = laps.length + 1;
    const currentTime = display.textContent;

    laps.push(currentTime);

    const lapItem = document.createElement('li');
    lapItem.innerHTML = `<span>Lap ${lapCount}</span><span>${currentTime}</span>`;
    lapList.appendChild(lapItem);
  }
}
