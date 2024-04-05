let forwardBtn = document.getElementById("forwardBtn");
forwardBtn.addEventListener("click", forwardBtnAdd);

let questionNumberIndicator = document.getElementById(
  "questionNumberIndicator"
);

let x = 0;

function forwardBtnAdd() {
  if (x < options.length - 1) {
    x++;
    forwardBtn.innerHTML = `Next`;
    masterFunc();
    let startMessageContainer = document.getElementById(
      "startMessageContainer"
    );
    startMessageContainer.innerHTML = ``;
  } else {
    forwardBtn.innerHTML = `Finish`;
    forwardBtn.addEventListener("click", finishFunction);
  }
}

let explanationContainer = [];

function explain() {
  explanationContainer.push(options[x].explanation);
}

function masterFunc() {
  explain();
  switchIds();
  question.innerHTML = `Q: ${options[x].question}`;
  questionNumberIndicator.innerHTML = `${x}/${options.length - 1}`;
  optionOne.className = "optionOne";
  optionTwo.className = "optionTwo";
}

function switchIds() {
  if (options[x].explanation.length % 2) {
    let questionBox = document.getElementById("questionBox");
    questionBox.innerHTML = `
            <div id="optionTwo">1. ${options[x].incorrect}</div>
            <div id="optionOne">2. ${options[x].correct}</div>
        `;
    let optionOne = document.getElementById("optionOne");
    optionOne.addEventListener("click", correct);
    let optionTwo = document.getElementById("optionTwo");
    optionTwo.addEventListener("click", inCorrect);
    let question = document.getElementById("question");
  } else {
    let questionBox = document.getElementById("questionBox");
    questionBox.innerHTML = `
            <div id="optionOne">1. ${options[x].correct}</div>
            <div id="optionTwo">2. ${options[x].incorrect}</div>
        `;
    let optionOne = document.getElementById("optionOne");
    optionOne.addEventListener("click", correct);
    let optionTwo = document.getElementById("optionTwo");
    optionTwo.addEventListener("click", inCorrect);
    let question = document.getElementById("question");
  }
}

function explainTrigger() {
  let explainLabel = document.getElementById("explainLabel");
  explainLabel.innerHTML = `Explanations:`;
  let reStartButton = document.getElementById("reStartButton");
  reStartButton.innerHTML = `<button id="reStartBtn">Re-Start Quiz</button>`;
  for (let i = 0; i < explanationContainer.length; i++) {
    let explanations = document.getElementById("explanations");
    let explainContain = document.createElement("div");
    explainContain.innerHTML = `<div>${i + 1}. ${
      explanationContainer[i]
    }</div>`;
    explanations.appendChild(explainContain);
  }
}

let numCorrect = [];

function correct() {
  numCorrect.push(1);
  optionTwo.className = "optionAfterSelect";
  optionOne.className = "optionAfterNoSelect";
}
function inCorrect() {
  optionOne.className = "optionAfterSelect";
  optionTwo.className = "optionAfterNoSelect";
}
