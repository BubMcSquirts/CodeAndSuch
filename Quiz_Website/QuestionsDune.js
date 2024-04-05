let options = [
  {
    question: "Who da man?",
    correct: "Bub McSquirts",
    incorrect: "Mr. MgGillicutty",
    explanation: `You know it`,
  },
  {
    question: "Where are the Atreides from?",
    correct: "Calamon",
    incorrect: "Salusa Sacundus",
    explanation: "The Atreides are from Calamon.",
  },
  {
    question: "What year is the original Dune based in?",
    correct: "1091",
    incorrect: "1203",
    explanation: "The original Dune was based in the year 1091.",
  },
  {
    question: "What does 'Muad'dib' refer to in Fremen?",
    correct: "Kangaroo Mouse",
    incorrect: "Desert Worm",
    explanation: `In Fremen, 'Muad'dib' refers to the kangaroo mouse. 
    This mouse was highly respected by the Fremen because it was known 
    for being especially efficient with its water.`,
  },
  {
    question: "Who was Paul Atreides' sword instructor?",
    correct: "Duncan Idaho",
    incorrect: "Thufir Hawat",
    explanation:
      "Duncan Idaho was Paul's swordmaster. Thufir Hawat was the Atreides' mentat.",
  },
  {
    question: "Where do the Harkonnens come from?",
    correct: "Geidi Prime",
    incorrect: "Salusa Secundus",
    explanation: "The Harkonnens are from Geidi Prime.",
  },
  {
    question: "What is the proper name for spice?",
    correct: "Melange",
    incorrect: "Houkipper",
    explanation: "Melange is a more proper name for Arrakis' spice.",
  },
  {
    question: "What was Duke Leto's relation to the Padisha emperor?",
    correct: "Cousin",
    incorrect: "Brother",
    explanation: "Duke Leto was the emperor's cousin.",
  },
  {
    question: "What was the name of Paul Atreide's little sister?",
    correct: "Alia",
    incorrect: "Jessica",
    explanation: "Alia was Paul's little sister, and Jessica was his mother.",
  },
  {
    question: "Who killed Baron Vladimir Harkonnen?",
    correct: "Paul",
    incorrect: "Paul's Sister",
    explanation: `Contrary to what the movies show, it was actually 
    Alia who killed the Baron, not Paul.`,
  },
  {
    question: "How old was Paul when he came to Arrakis?",
    correct: "15 years old",
    incorrect: "23 years old",
    explanation: `Contrary to the movies(in which Paul is portrayed as a 
      capable man), in the books Paul was actually only a youth of 15 when 
      he came to Arrakis, and additionally he was said to be small for his age. 
      At the time of his ascencion to the throne he was 17.`,
  },
  {
    question:
      "What was the name of Jessica's Bene Jesserit trainer and chief Truthsayer to the Padisha emperor?",
    correct: "Helen Gaius Mohiam",
    incorrect: "Fulisha Samul Retakctit",
    explanation: "Alia was Paul's little sister, and Jessica was his mother.",
  },
  {
    question: "How old was Alia when Paul became emperor?",
    correct: "4 years old.",
    incorrect: "She was not born yet.",
    explanation: `As opposed to the movies which portrayed Alia as unborn, 
    in the books she was actually 4 years old when the Padisha Emperor 
    came to Arrakis and Paul siezed the throne.`,
  },
];

let finishAlert = document.getElementById("finishAlert");

function finishFunction() {
  explainTrigger();
  if (numCorrect.length <= options.length / 4) {
    finishAlert.innerHTML = `Um... You got ${numCorrect.length}/${
      options.length - 1
    } correct. Do you even study bro?
    <img src="images/JPEG/Dune_Quiz- (2).jpg" />`;
  } else if (numCorrect.length <= options.length / 2) {
    finishAlert.innerHTML = `Good job! You got ${numCorrect.length}/${
      options.length - 1
    } correct.
    <img src="images/JPEG/Dune_Quiz- (3).jpg" />`;
  } else {
    finishAlert.innerHTML = `Bro, you got ${numCorrect.length}/${
      options.length - 1
    } correct. You are a confirmed nerd. You should probably get out more. Oh, and also, lay off the spice.
    <img src="images/JPEG/Dune_Quiz- (1).jpg" />`;
  }
  let reStartBtn = document.getElementById("reStartBtn");
  reStartBtn.addEventListener("click", reSetFunction);

  function reSetFunction() {
    window.location.reload();
  }
}
