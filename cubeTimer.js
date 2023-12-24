var timer;
var clock = document.getElementById("timer");
var previousTimes = document.getElementById("previousTimes");
var averageTimes = document.getElementById("averageTimes");
var numberOfSolves = document.getElementById("numberOfSolves");
var timesContainer = document.getElementById("previousTimes");
const Times = [];

let [milliseconds, seconds, minutes] = [0, 0, 0];

function pause() {
  clearInterval(timer);
  previousTimesCounter();
}

function presentTime() {
  milliseconds++;
  if (milliseconds == 10) {
    milliseconds = 0;
    seconds++;
  }
  clock.innerHTML = seconds + "." + milliseconds;
}

function go() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(presentTime, 92.7);
}

var keyCounter = 0;
window.onload = function () {
  document.onkeyup = function () {
    keyCounter++;
    clock.className = "going";
    if (keyCounter % 2 == 0) {
      //Average:
      Times.push(seconds, milliseconds);
      clock.innerHTML = seconds + "." + milliseconds;
      let total = 0;
      Times.forEach((item) => {
        total += item;
      });
      let average = total / Times.length / 2;
      averageTimes.innerHTML = `Average:${average}`;
      numberOfSolves.innerHTML = `Solves:${Times.length / 2}`;
      //Above Average
      pause();
      clock.className = "stop";
    } else {
      go();
      milliseconds = [0];
      seconds = [0];
    }
  };
};

document.onkeydown = function () {
  clearInterval(timer);
  clock.className = "start";
};

function previousTimesCounter() {
  var paragraph = document.createElement("p");
  paragraph.innerHTML = `
   <div id="previousSingleTime">
      <button>X</button>
     <div>${clock.innerHTML}</div>
   </div>`;
  timesContainer.appendChild(paragraph);
  paragraph.addEventListener("click", function () {
    timesContainer.removeChild(paragraph);
  });
}

function deleteAllTimes() {
  if (confirm("Would you really like to delete all times in this session?")) {
    previousTimes.innerHTML = ``;
    averageTimes.innerHTML = `Average:`;
    numberOfSolves.innerHTML = `Solves:`;
  } else {
  }
}
