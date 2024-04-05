let options = [
  {
    question: "Who da man?",
    correct: "Bub McSquirts",
    incorrect: "Mr. MgGillicutty",
    explanation: ``,
  },
  {
    question: "When was the first Rubik's Cube Championship held?",
    correct: "1982",
    incorrect: "1985",
    explanation: `The first Rubik's cube championship was held back in '82. The
    winning solve was about 22 seconds.`,
  },
  {
    question: "Who was the first cuber to get an official sub 10 solve?",
    correct: "Thibaut Jacquinot",
    incorrect: "Feliks Zemdegs",
    explanation: `Thibaut Jacquinot was the first cuber to ever get an under 10 second
    solve in official competition.`,
  },
  {
    question: "What is the most popular speed solving method?",
    correct: "CFOP",
    incorrect: "ZZ",
    explanation: `CFOP is the most popular speed solving method.`,
  },
  {
    question: "Where was the Rubik's cube invented?",
    correct: "Hungary",
    incorrect: "Japan",
    explanation: `The Rubik's cube was invented in Hungary.`,
  },
  {
    question: "Which is best for the lowest solve time:",
    correct: "Turn slower so that you can anticipate your next move.",
    incorrect: "Turn as fast as possible and try to anticipate your next move.",
    explanation: `It is more important to know what move you are going to do next than it is
    to go as fast as possible. In the end, going slower but knowing your next move will
    result in a smoother solve and an over all faster time.`,
  },
  {
    question: "Which hand do cubers usually use to solve the cube one handed?",
    correct: "Left hand.",
    incorrect: "Right hand.",
    explanation: `Most cubers prefer touse their left hand for one handed solving. This is because
    most algorithms prioritize R (right) moves, which is easier`,
  },
  {
    question: "Who was considered to be the fastest cuber in the 2010s?",
    correct: "Feliks Zemdegs",
    incorrect: "Max Park",
    explanation: `Felik's Zemdegs held the world record Average of 5 solve from 
    about 2009 to 2020 (with the exception of about a 5 month gap when Max Park 
      broke that record, only to have Felik's break it back). He is undoubtedly
      the best cuber of the decade.`,
  },
  {
    question: "What does CFOP stand for?",
    correct:
      "Cross. First Two Layers. Orientation of the Last Layer. Permutation of the Last Layer.",
    incorrect:
      "Cross. First Layer. Open Key Algorithims. Perpetuate motion of solve.",
    explanation: `CFOP stands for: Cross. First Two Layers. Orientation of the 
      Last Layer. Permutation of the Last Layer.`,
  },
  {
    question:
      "When a cuber solves a complete cross and solves a 2FL pair at the same time, it is called a(n):",
    correct: "X-Cross",
    incorrect: "CrossFL-Transmutation",
    explanation: `When a cuber solves a complete cross and solves a 2FL pair at the same 
    time it is called an X-Cross`,
  },
  {
    question: "What are the moves of the Sune (aka Fish) algorithm?",
    correct: "R U R' U R U2 R'",
    incorrect: "R U' R U' R2 U2 R'",
    explanation: `The moves of the Fish (Sune) algorithm are: R U R' U R U2 R'`,
  },
];

let finishAlert = document.getElementById("finishAlert");

function finishFunction() {
  explainTrigger();
  if (numCorrect.length <= options.length / 3) {
    finishAlert.innerHTML = `
    You only got ${numCorrect.length} / ${
      options.length - 1
    } right. Do you even cube bro?
    <img src="images/TestCubing/BrokenCube.webp">`;
  } else if (numCorrect.length <= options.length / 1.5) {
    finishAlert.innerHTML = `You got ${numCorrect.length} / ${
      options.length - 1
    } right. You obviously know your stuff about things pretty good.
    <img src="images/TestCubing/Cube_Blur.jpg">`;
  } else {
    finishAlert.innerHTML = `Wowzers, you got ${numCorrect.length} / ${
      options.length - 1
    } right!!!!!! You are Speeeeeeeeeeeeeddddd.
    <img src="images/TestCubing/lightningspeed.jpg">`;
  }
  let reStartBtn = document.getElementById("reStartBtn");
  reStartBtn.addEventListener("click", reSetFunction);

  function reSetFunction() {
    window.location.reload();
  }
}
