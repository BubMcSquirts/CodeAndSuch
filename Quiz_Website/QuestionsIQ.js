let options = [
  {
    question: "Who da man?",
    correct: "Bub McSquirts",
    incorrect: "Mr. MgGillicutty",
    explanation: "because!",
  },
  {
    question: "Is a hot dog a sandwich?",
    correct: "Yes",
    incorrect: "No",
    explanation: `A hot dog is a sandwich because it is meat between bread. Case closed.`,
  },
  {
    question: "What should Neo have done with the pills in the Matrix?",
    correct: "Take both.",
    incorrect: "Take the red one.",
    explanation: `Neo should have taken both because no one knows what could have happened. 
    It would probably be better than fighting a space war with robots though.`,
  },
  {
    question: "What is the english word for 'dog?'",
    correct: "dog",
    incorrect: "canis",
    explanation: "The english word for dog is dog.",
  },
  {
    question: "Every 60 seconds, how many minutes pass on the moon?",
    correct: "1.0",
    incorrect: "0.93145",
    explanation: "60 seconds is 1.0 minutes no matter where it is.",
  },
  {
    question:
      "When you make a bowl of cereal, do you put the milk or cereal in first?",
    correct: "cereal first",
    incorrect: "milk first",
    explanation:
      "Cereal should be first. Does this really need to be explained?",
  },
  {
    question: "How many sides does a triangle have?",
    correct: "Bro, just 3.",
    incorrect: "Infinite sides.",
    explanation: "A triangle does in fact only have 3 sides.",
  },
  {
    question: "Where did Michael Jackson go after he faked his death?",
    correct: "An abondoned bunker situated north of Pasco, Washington.",
    incorrect: "Wait what...........?",
    explanation: `Everbody knows that Michael Jackson, Kobe, Elvis and JFK are 
    all chillin' in a top secret bunker somewhere in central Washington.`,
  },
  {
    question: "Why can't dinosaurs talk?",
    correct: "Because the're all dead.",
    incorrect:
      "Because their vocal chords are made of splineoplastic tissue that is not ideal for speech.",
    explanation: "Dinosaurs are in fact all dead and can therefore not talk.",
  },
  {
    question:
      "How much wood would a wood chuck chuck if a wood chuck could chuck wood?",
    correct: "But they can chuck wood though!",
    incorrect:
      "There is no definite facts to point to just how mcuh they would chuck, but the consequesnces would be catastrophic.",
    explanation: "Wood chucks can chuck wood, so this axiom is meaningless.",
  },
  {
    question:
      "When you go to a large gathering where people will sit (eg: school, meeting, plane flight ect.) where do you sit?",
    correct:
      "Either the front or the back of the room, but hardly ever the middle.",
    incorrect: "Almost always in the middle.",
    explanation:
      "It is a sign of superior intellect to sit at either the front or the back of a room.",
  },
  {
    question: "Do glasses make you smart?",
    correct: "No, unless if they do.",
    incorrect: "Yes, always.",
    explanation:
      "Glasses will only make you smart if they make you smart. Think about it.",
  },
  {
    question: "When you reach the edge of the world, what happens?",
    correct: "You fall off.",
    incorrect: "But there is no edge of the world!!!!!!!!!!!",
    explanation: `Even though the world is not flat(hate to break it to you), 
      if you could hypothetically reach the edge of the world then you would in fact fall off.`,
  },
];

let finishAlert = document.getElementById("finishAlert");

function finishFunction() {
  explainTrigger();
  if (numCorrect.length <= options.length / 3) {
    finishAlert.innerHTML = `
      Wow, you got ${
        numCorrect.length / (options.length - 1)
      }% right. It is a wonder that you survived life this long. 
      Its almost like nothing in that quiz actually mattered.
      <img src="images/TestIQ/JPEG/TestIQ- (4).jpg" />`;
  } else if (numCorrect.length <= options.length / 1.5) {
    finishAlert.innerHTML = `Ok, you got ${
      numCorrect.length / (options.length - 1)
    }% right. You're pretty smart. But honestly, you know a bit too much to be 
    normal, but not quite enough to be a true nerd. Pick one!
      <img src="images/TestIQ/JPEG/TestIQ- (3).jpg" />`;
  } else {
    finishAlert.innerHTML = `WOW, you got ${
      numCorrect.length / (options.length - 1)
    }% right. Your IQ is insane. Its been confirmed. 
    Now you should probably go outside.
      <img src="images/TestIQ/JPEG/TestIQ- (1).jpg" />`;
  }
  let reStartBtn = document.getElementById("reStartBtn");
  reStartBtn.addEventListener("click", reSetFunction);

  function reSetFunction() {
    window.location.reload();
  }
}
