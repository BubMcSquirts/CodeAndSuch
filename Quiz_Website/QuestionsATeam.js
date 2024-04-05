let options = [
  {
    question: "Who da man?",
    correct: "Bub McSquirts",
    incorrect: "Mr. MgGillicutty",
    explanation: "because!",
  },
  {
    question: "What years did the A Team air on TV?",
    correct: "1983-1987",
    incorrect: "1981-1988",
    explanation: `The A Team aired on TV from 1983-1987.`,
  },
  {
    question: "What were the A Team before they became the A Team?",
    correct: "A Crack Commando Unit",
    incorrect: "A Navy Seal Squad",
    explanation: `Before the A Team went rogue, they were a Crack Commando unit.`,
  },
  {
    question: "Where is the A Team based?",
    correct: "Los Angelas",
    incorrect: "Chicago",
    explanation: "The A Team was based in Los Angelas.",
  },
  {
    question: "Who are the four members of the A Team?",
    correct: "Hannibal, Face, B.A., Murdock",
    incorrect: "Face, Han, Murdock, Mr. B",
    explanation:
      "The four members of the A Team were Hannibal, Face, Mr. T and Murdock",
  },
  {
    question: "What does B.A. stand for in 'B.A. Barracus'?",
    correct: "Bad Attitude",
    incorrect: "Big Act",
    explanation: "B.A. Barracus stands for Bad Attitude Barracus.",
  },
  {
    question: "What does Hannibal say basically every episode?",
    correct: "I love it when a plan comes together.",
    incorrect: "Just like the old days.",
    explanation:
      "'I love it when a plan comes together' is one of the most ubiquitous sayings in the show.",
  },
  {
    question: "What does H.M. stand for in 'H.M. Murdock'?",
    correct: "Howling Mad",
    incorrect: "Henry Matt",
    explanation: "H.M. Murdock stands for Howling Mad Murdock.",
  },
  {
    question: "Why does B.A. say he does what he does?",
    correct: "I do it for da kids!",
    incorrect: "I love it when a plan comes together.",
    explanation: "B.A. does it for the kids, man!",
  },
  {
    question: "Who is the actor for B.A. Barracus?",
    correct: "Mr. T",
    incorrect: "Will Smith",
    explanation: `Mr. T plays B.A. Barracus.
    <video controls loop class="videoFinish">
        <source src="images/TestATeam/Mr.T_Advice_1.mp4" type="video/mp4" />
    </video>
  `,
  },
  {
    question: "Which member of the A Team is most known for his disguises?",
    correct: "Face",
    incorrect: "Hannibal",
    explanation: "Face is known for his many disguises.",
  },
  {
    question: "What other movie is Mr. T. most known for?",
    correct: "Rocky II",
    incorrect: "Independance Day",
    explanation: "Mr. T plays Rocky's nemisis in Rocky II.",
  },
];

let finishAlert = document.getElementById("finishAlert");

function finishFunction() {
  explainTrigger();
  if (numCorrect.length <= options.length / 2) {
    finishAlert.innerHTML = `
          Wow, you got ${
            numCorrect.length / (options.length - 1)
          }% right. That is not very good. But in the words of Mr.T:
            <video controls autoplay loop class="videoFinish">
                <source src="images/TestATeam/Mr.T_Advice_2.mp4" type="video/mp4" />
            </video>
          `;
  } else {
    finishAlert.innerHTML = `You got ${
      numCorrect.length / (options.length - 1)
    }% right. You know a lot about 80s Tv! Ok!
    <video controls autoplay loop class="videoFinish">
        <source src="images/TestATeam/Mr.T_Advice_3.mp4" type="video/mp4" />
    </video>
  `;
  }
  let reStartBtn = document.getElementById("reStartBtn");
  reStartBtn.addEventListener("click", reSetFunction);

  function reSetFunction() {
    window.location.reload();
  }
}
