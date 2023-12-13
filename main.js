const questions = [
      {
        question: "What is the national dance of Argentina?",
        choices: ["Tango", "Flamenco", "Salsa", "Samba"],
        answer: 0,
      },
      {
        question: "What is the traditional dance of Hawaii?",
        choices: ["Hula", "Ballet", "Tap", "Hip-hop"],
        answer: 0,
      },
      {
        question: "What is the most popular ballroom dance?",
        choices: ["Waltz", "Tango", "Cha-cha-cha", "Rumba"],
        answer: 0,
      },
       {
        question: "The difference of and Engano close to Engano Waltz is a step after a close. This step is commonly found is what region in Philippines?",
        choices: ["Cebu", "Quezon", "La Union", "Bicol"],
        answer: 0,
      },
       {
        question: "This dance was originated in a Non-Christian culture that both of the feet is touching the flat surface?",
        choices: ["Mazurka", "Mincing", "Papuri", "Sagamantica"],
        answer: 0,
      },
    ];

    let currentQuestion = 0;
    let score = 0;

    function displayQuestion() {
      const question = questions[currentQuestion];

      document.getElementById("question").textContent = question.question;

      const choicesElement = document.getElementById("choices");
      choicesElement.innerHTML = "";

      for (let i = 0; i < question.choices.length; i++) {
        const choiceElement = document.createElement("li");
        const choiceLabel = document.createElement("label");
        choiceLabel.textContent = question.choices[i];
        choiceElement.appendChild(choiceLabel);
        choicesElement.appendChild(choiceElement);

        choiceElement.addEventListener("click", function () {
          checkAnswer(i);
        });
      }
    }

    function checkAnswer(selectedAnswer) {
      const question = questions[currentQuestion];
      const correctAnswer = question.answer;

      if (selectedAnswer === correctAnswer) {
        score++;
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is " + question.choices[correctAnswer]);
      }

      currentQuestion++;

      // Check if all questions have been answered
      if (currentQuestion === questions.length) {
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;
      } else {
        displayQuestion();
      }
    }

    displayQuestion();