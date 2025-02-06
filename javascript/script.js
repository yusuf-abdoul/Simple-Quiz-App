const configContainer = document.querySelector(".config-container");
const infoContainer = document.querySelector(".info-box");
const quizContainer = document.querySelector(".quiz_box");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".timer_sec");
const resultContainer = document.querySelector(".result_box");



const QUIZ_TIME_LIMIT = 10;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;

let quizCategory = "HTML";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionIndexHistory = [];
let correctAnswerCount = 0;

// Display the quiz result and  hide the quiz container 
const showQuizResult = ()  => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You've answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`;
    document.querySelector(".result-message").innerHTML = resultText;
}

// Clear and reste the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

// Initialize and start the timer for the  current question
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";

            // Disable all answer options after one option is selected
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    }, 1000);

}

//fetch a random question based on the selected category
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    // Show the resultd if all questions have been used
    if(questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)){
        return showQuizResult();
    }
    // Filter out already asked question from based on the selected category
    const availableQuestion = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));
    const randomQuestion = availableQuestion[Math.floor(Math.random() * categoryQuestions.length)];

    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;

}

//Highlight the correct answer option and add the icon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-outlined">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);

}
// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? "correct" : "incorrect");
    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++; 

    //Insert icon based on correctness
    const iconHTML = `<span class="material-symbols-outlined">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    

    // Disable all answer options after one option is selected
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    nextQuestionBtn.style.visibility = "visible";
    
}
// Render the current question and it options in the quiz
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;
    console.log(currentQuestion);
    
    resetTimer();
    startTimer();

//update the UI
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

// Create option <li> elements and append them and add click event Listeners
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
}
// Start the quiz and display the quiz rules
const startQuiz = () => {
    configContainer.style.display = "none";
    infoContainer.style.display = "block";

}
const quitQuiz = () => {
    infoContainer.style.display = "none";
    configContainer.style.display = "block";
}

// Highlight the selected optionon click -category or no. of question
document.querySelectorAll(".category-btn, .question-btn").forEach(option => {
    option.addEventListener("click", () => {
        const activeElement = option.parentNode.querySelector(".active");
        if (activeElement) {
            activeElement.classList.remove("active");
        }
        option.classList.add("active");
    });
});
// Start the quiz and render the random question
const continueToQuiz = () => {
    infoContainer.style.display = "none";
    quizContainer.style.display = "block";

    //Update the quiz category and number of questions
    quizCategory = configContainer.querySelector(".category-btn.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-btn.active").textContent);
    renderQuestion();
}

// Reset the Quiz and return to the configuration container 
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}
// Reset the Quiz and return to the quiz container
const restartQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory.length = 0;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    renderQuestion();
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".restart").addEventListener("click", restartQuiz);
document.querySelector(".quit").addEventListener("click", resetQuiz);
document.querySelector(".start-btn").addEventListener("click", startQuiz);
document.querySelector(".continue-btn").addEventListener("click", continueToQuiz);
document.querySelector(".quit-btn").addEventListener("click", quitQuiz);