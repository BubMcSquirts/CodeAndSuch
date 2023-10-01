var timer;
var clock = document.getElementById("timer");
var previousTimes = document.getElementById("previousTimes");
let [seconds, minutes] = [0, 0];

function pause() {
  clearInterval(timer);
  previousTimesCounter();
}

function presentTime() {
  seconds++;
  {
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let s = seconds < 10 ? "0" + seconds : seconds;
  let m = minutes < 10 ? "0" + minutes : minutes;

  clock.innerHTML = m + ":" + s;
}

function go() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(presentTime, 1000);
}

var keyCounter = 0;
window.onload = function () {
  document.onkeyup = function () {
    keyCounter++;
    clock.className = "going";
    if (keyCounter % 2 == 0) {
      pause();
      clock.className = "stop";
    } else {
      go();
    }
  };
};

document.onkeydown = function () {
  clearInterval(timer);
  [seconds, minutes] = [0, 0];
  clock.className = "start";
};

//Previous Times

let addToDoButton = document.getElementById("tryThis");
let toDoContainer = document.getElementById("previousTimes");

function previousTimesCounter() {
  var paragraph = document.createElement("p");
  paragraph.innerHTML = `
   <div id="previousSingleTime">
      <button>X</button>
     <div>${clock.innerHTML}</div>
   </div>`;
  toDoContainer.appendChild(paragraph);
  paragraph.addEventListener("click", function () {
    toDoContainer.removeChild(paragraph);
  });
}

function deleteAllTimes() {
  if (confirm("Would you really like to delete all times in this session?")) {
    previousTimes.innerHTML = ``;
  } else {
  }
}
