let options = [
  {
    question: "Who da man?",
    correct: "Bub McSquirts",
    incorrect: "Mr. MgGillicutty",
    explanation: ``,
  },
  {
    question: "What is the most populous state in the USA?",
    correct: "California",
    incorrect: "New York",
    explanation: `California has over 40,000,000 people in it, which makes it the most populous state.`,
  },
  {
    question: "What is the capital of Alaska?",
    correct: "Juneau",
    incorrect: "Anchorage",
    explanation: `Juneau is the capitol of Alaska because... well... I 
    guess we don't know why. It just is.`,
  },
  {
    question: "What is the oldest state?",
    correct: "Delaware",
    incorrect: "Massachusetts",
    explanation: `Delaware is the oldest state.`,
  },
  {
    question: "How long was America's war for independance?",
    correct: "1775-1783",
    incorrect: "1776-1779",
    explanation: `While the Declaration of Independance was signed in 1776,
    the war for independance began in 1775.`,
  },
  {
    question: "What is the state bird of Idaho?",
    correct: "Mountain Bluebird",
    incorrect: "Kite Hawk",
    explanation: `The state bird of Idaho is the Mountain Bluebird. No one knows who
    decided that, but it's true.`,
  },
  {
    question:
      "In Johnny Cash's 'I've Been Everywhere', which state does he say: '_______ what a pity'?",
    correct: "Mississippi",
    incorrect: "Kentucky",
    explanation: `If you have'nt heard heard Johnny Cash's 'I've Been Everywhere', 
    you are missing out on life. And yes, he does say 'Mississippi what a pity.'`,
  },
  {
    question: "Which state has the lowest GDP?",
    correct: "Vermont",
    incorrect: "Wyoming",
    explanation: `Vermont has the lowest state GDP, so we still don't know what they
    do up there.`,
  },
  {
    question: "What is the smallest state by land mass?",
    correct: "Rhode Island",
    incorrect: "Delaware",
    explanation: `Rhode Island is the smallest state by area.`,
  },
  {
    question: "When did Hawaii become a state?",
    correct: "1959",
    incorrect: "1937",
    explanation: `Hawaii is the newest state in the union. It was added in 1959.`,
  },
  {
    question: "Which state has the highest average elevation?",
    correct: "Colorado",
    incorrect: "Utah",
    explanation: `Colorado has the highest average elevation.`,
  },
  {
    question: "What is the total area of the US (including Alaska and Hawaii)?",
    correct: "3,796,742 sq mi",
    incorrect: "5,892,578 sq mi",
    explanation: `The total area of the U.S.A including all 50 states is 3,796,742 sq miles.`,
  },
  {
    question: "Where was Pineapple pizza invented?",
    correct: "Vancouver, Canada",
    incorrect: "Hawaii",
    explanation: `Pineapple pizza was not invented in Hawaii, but rather in Vancouver Canada.`,
  },
];

let finishAlert = document.getElementById("finishAlert");

function finishFunction() {
  explainTrigger();
  if (numCorrect.length <= options.length / 3) {
    finishAlert.innerHTML = `
      You only got ${numCorrect.length} / ${
      options.length - 1
    } right. You are are probably from California.
    <img src="images/TestStates/JPEG/Napoleon.jpg">`;
  } else if (numCorrect.length <= options.length / 1.5) {
    finishAlert.innerHTML = `You got ${numCorrect.length} / ${
      options.length - 1
    } right. You do not know everything, but you know enough to be an American.
    <img src="images/TestStates/JPEG/ok-boomer-meme.jpg">`;
  } else {
    finishAlert.innerHTML = `Wow, you got ${numCorrect.length} / ${
      options.length - 1
    }! You are from 'merica for sure!
    <img src="images/TestStates/JPEG/merica.jpg">`;
  }
  let reStartBtn = document.getElementById("reStartBtn");
  reStartBtn.addEventListener("click", reSetFunction);

  function reSetFunction() {
    window.location.reload();
  }
}
