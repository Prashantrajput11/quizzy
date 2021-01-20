const questions = [
  {
    question: "what is full form of html",
    options: [
      "hyper text markup language",
      "hyper tag markup langauge",
      "hyper tag marking language",
      "none of the above",
    ],
    answer: "hyper text markup language",
  },
  {
    question: "what is a string",
    options: ["datatype", "componnet", "function"],
    answer: "datatype",
  },
  {
    question: "this points to when called on global execution context",
    options: ["window", "undefined", "null", "function"],
    answer: "window",
  },
  {
    question:
      "Which of the following function of Array object calls a function for each element in the array?",
    options: ["concat", "forEach", "splice", "split"],
    answer: "forEach",
  },

  {
    question:
      "Which of the following function of Array object reverses the order of the elements of an array?",
    options: ["reverse", "push", "pop", "reduce"],
    answer: "reverse",
  },
];
//selectors

let nextQuiz = document.querySelector(".next");
let optionsContainer = document.querySelector(".options-container");
let scoreEl = document.querySelector(".score");
let container = document.querySelector(".container");
let restart = document.querySelector(".restart");

//event listeners
nextQuiz.addEventListener("click", showNextQuiz);
restart.addEventListener("click", function () {
  document.location.href = "";
});

//functions

let counter = 0;
let score = 0;

// to show next quiz

function showNextQuiz() {
  let html = `
    Question no ${counter + 1} <h2 class="question">${
    questions[counter].question
  }</h2>
     <button class="btn btn-one">${questions[counter].options[0]}</button>
     <button class="btn btn-two">${questions[counter].options[1]}</button>
     <button class="btn btn-three">${questions[counter].options[2]}</button>
     <button class="btn btn-four">${questions[counter].options[3]}</button>
     `;

  optionsContainer.innerHTML = html;
  // scoreEl.innerText = "your score is " + score;
}

//function to handle user click -- event delegation

function checkAnswer() {
  optionsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
      console.log(e.target.innerText);

      if (questions[counter].answer === e.target.innerText) {
        // console.log("correct");
        // console.log(questions[counter]);
        counter++;

        score++;
        if (counter >= questions.length) {
          // console.log("quiz over");
          optionsContainer.innerText = "Quiz over";
          scoreEl.style.display = "block";
          scoreEl.innerText = "your score is " + score;
          optionsContainer.style.display = "none";
          nextQuiz.style.display = "none";
          restart.style.display = "block";
        }
      } else {
        // console.log("wrong choice");
        // console.log(questions[counter]);
        counter++;
        score--;
        // console.log(`your score is ${score}`);
        if (counter >= questions.length) {
          // console.log("quiz over");
          optionsContainer.innerText = "Quiz over";
          scoreEl.style.display = "block";
          scoreEl.innerText = "your score is" + score;
          optionsContainer.style.display = "none";
          nextQuiz.style.display = "none";
          restart.style.display = "block";
        }
      }
    }
  });
}
// console.log("counter value is" + counter);
checkAnswer();

// console.log(questions.length);
