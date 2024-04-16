let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timer');

function startTimer() {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);

  hours = isNaN(hours) ? 0 : hours;
  minutes = isNaN(minutes) ? 0 : minutes;
  seconds = isNaN(seconds) ? 0 : seconds;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds > 0 && !timer) {
    timer = setInterval(function () {
      updateTimer(totalSeconds);
      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(timer);
        alert('Timer expired!');
        resetTimer();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
  updateTimer(0);
}

function updateTimer(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  timerDisplay.textContent = `${result(hours)}:${result(minutes)}:${result(seconds)}`;
}

function result(time) {
  return time < 10 ? `0${time}` : time;
}