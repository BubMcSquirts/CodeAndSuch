let options = [
  {
    question: "Who da man?",
    correct: "Bub McSquirts",
    incorrect: "Mr. MgGillicutty",
    explanation: "because!",
  },
  {
    question: "When was the first Blender release made?",
    correct: "2003",
    incorrect: "1999",
    explanation: `The first open source Blender realease, 2.2, was released in 2003.`,
  },
  {
    question: "What are the hot keys for the Bool Tool addon?",
    correct: "Ctrl Shift B",
    incorrect: "Alt Ctrl B",
    explanation: `The Bool Tool addon's shortcut is Ctrl Shift B.`,
  },
  {
    question: "What is the shortcut for sharpening an edge in edit mode?",
    correct: "Shift E",
    incorrect: "Ctrl Shift E",
    explanation: "The shortcut for sharpening an edge in edit mode is Shift E.",
  },
  {
    question: "Where can you change the project's camera?",
    correct: "Scene settings",
    incorrect: "Render settings",
    explanation: "You can change the project's camera in the Scene tab.",
  },
  {
    question: "How can you delete an object with only one key?",
    correct: "Delete key",
    incorrect: "Backspace key",
    explanation: "You can delete an object with one click with the delete key.",
  },
];

let finishAlert = document.getElementById("finishAlert");

function finishFunction() {
  explainTrigger();
  if (numCorrect.length <= options.length / 2) {
    finishAlert.innerHTML = `
        Wow, you got ${
          numCorrect.length / (options.length - 1)
        }% right. You are a Blender wiz.`;
  } else {
    finishAlert.innerHTML = `You got ${
      numCorrect.length / (options.length - 1)
    }% right. />`;
  }
  let reStartBtn = document.getElementById("reStartBtn");
  reStartBtn.addEventListener("click", reSetFunction);

  function reSetFunction() {
    window.location.reload();
  }
}
