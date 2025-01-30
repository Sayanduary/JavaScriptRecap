// Get elements
const clock = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmButton = document.getElementById("set-alarm");
const stopAlarmButton = document.getElementById("stop-alarm");
const alarmMessage = document.getElementById("alarm-message");
const alarmSound = document.getElementById("alarm-sound");

let alarmTime = null;
let alarmActive = false;

// Update the clock every second
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero if needed
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Check if alarm should ring
  if (alarmActive && `${hours}:${minutes} ${ampm}` === alarmTime) {
    ringAlarm();
  }
}

// Set the alarm
setAlarmButton.addEventListener("click", () => {
  const alarmValue = alarmTimeInput.value;
  if (!alarmValue) {
    alert("Please set a valid alarm time.");
    return;
  }

  let [alarmHours, alarmMinutes] = alarmValue.split(":");
  alarmHours = parseInt(alarmHours);
  alarmMinutes = parseInt(alarmMinutes);

  let now = new Date();
  let ampm = alarmHours >= 12 ? "PM" : "AM";
  alarmHours = alarmHours % 12 || 12; // Convert to 12-hour format

  alarmTime = `${alarmHours}:${alarmMinutes.toString().padStart(2, "0")} ${ampm}`;
  alarmActive = true;
  alarmMessage.innerText = `Alarm set for ${alarmTime}`;
  stopAlarmButton.style.display = "inline-block";
});

// Ring the alarm
function ringAlarm() {
  alarmSound.play();
  window.alert("⏰ Time's up! Wake up!");
}

// Stop the alarm
stopAlarmButton.addEventListener("click", () => {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  alarmActive = false;
  alarmMessage.innerText = "";
  stopAlarmButton.style.display = "none";
});

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
