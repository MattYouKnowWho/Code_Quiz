var startBtn = document.getElementById('start');
var scoreBtn = document.querySelector('.scoreBtn');
var viewScore= document.querySelector(".view-scores");
var submitBtn = document.getElementById('submit');

var containerEl = document.getElementById('container'); //question container
var TitleEl = document.querySelector('.question-title'); //Question Title
var choices = document.querySelector('.answer-choices') //multiple choice
var quizInfo= document.querySelector('.quiz-info'); //quiz rules
var resultPage = document.getElementById('result-page'); //end of the quiz
var flexContainer = document.querySelector ('.flex');
var answerStatus = document.querySelector('.answer-status'); //correct & wrong
var score = document.getElementById('score');
var finalScore = document.getElementById('final-score');
var initialsEL = document.getElementById('initials-el'); //initials input by user
var scoreInput = document.querySelector('.score-input');

var currentQuestionIndex = 0;//tracking current question 
var answerStatus= "";

//Quiz Questions
var myQuestions = [
    {
        question: "In Revenge of the Sith, who defeated General Grevius?",
        answers: [
            "A: Master Yoda",
            "B: Commander Cody",
            "C: Obi-wan Kenobi",
            "D: All of the above"
        ],
        correctAnswer: "C: Obi-wan Kenobi"
    },
    {
        question: "In the Mandolorian, what was Mando's real name?",
        answers: [
            "A: Jar-jar Binks",
            "B: Ahsoka Tano",
            "C: Cad Bane",
            "D: Din Djarin",

        ],
        correctAnswer: "D: Din Djarin"

    },
    {
        question: "Who trained Boba Fett?",
        answers: [
            "A: The younglings",
            "B: Aurra Sing",
            "C: R2D2",
            "D: Zero the Hut",

        ],
        correctAnswer: "B: Aurra Sing"


    },
    {
        question: "In Attack of the Clones, who married Padme Amidala?",
        answers: [
            "A: Anakin Skywalker",
            "B: Palpatine",
            "C: Jettster",
            "D: Mace-Windu"
        ],
        answer: "A: Anakin Skywalker"



    },
];

//functions run when startQuiz func is called
function startQuiz () {

    hideHome();
    startTimer();
    showQuestions();
}

//hide home page
function hideHome() {
    startBtn.style.display = 'none';
    quizInfo.style.display = 'none';
}

//hide question page
function hideQuestions() {
    containerEl.style.display = 'none';
}

//show result page
function showResultPage() {
    resultPage.style.cssText = `
    display: block;
    margin: 20%;
    text-align: center;
    `;
}


//need to show question on HTML
function showQuestions(){
    choices.innerHTML = ""; //to clear previous question
    
    var currentQ = myQuestions[currentQuestionIndex]; //displaying current question
    
    TitleEl.textContent = currentQ.question; //assigning current question
    
    var answers = currentQ.answers; // answer choices of current question
    for (var i = 0; i < answers.length; i++) {
        var answer = answers[i]; //loop through EACH answer choices in the answer array
        
        var answerChoices = document.createElement('button');
            answerChoices.textContent = answer;
            answerChoices.style.cssText = `
            display: justify-content;
            text-align: center;
            margin: 0 0 15px 5rem;
            padding: 9px;
            font-size: 17px;
            `;
            choices.append(answerChoices);

            //Checking answers clicked 
            answerChoices.addEventListener("click", function (event) {
                var selectedAnswer = event.target.textContent; //textContent will show Correct or Wrong

                if (selectedAnswer === currentQ.correctAnswer) {
                    answerCorrect();
                } else {
                    answerWrong()
                }
            
                //go to next Q    
            currentQuestionIndex++;
            
            //check if questions are all answered
            if (currentQuestionIndex === myQuestions.length) {
                gameOver();
            }else {
                showQuestions();
            }
            });
    
    }
}


//if answer correct
function answerCorrect() {

    answerStatus.textContent = "Correct!";

}

//if answer wrong
function answerWrong() {
    
    //subtract 10secs from clock
    counter -= 10;
    answerStatus.textContent = "Wrong!";
   
   
}
// when the timer is over
function gameOver() {
    //stop timer
    clearInterval(countDown);

    hideQuestions();
    showResultPage();
    
    var getFinalScore = counter;
    finalScore.textContent = getFinalScore;
}


//save in local storage
function addToLocal()  {
    
    var initials = initialsEL.value.trim();

    if (initials !== "") {

        var playerInfo = JSON.parse(localStorage.getItem("playerScore")) || [];

        var currentPlayer = {
            name: initials,
            score: counter,
        };

        playerInfo.push(currentPlayer);
        localStorage.setItem("playerScore", JSON.stringify(playerInfo));
        
        location.href = "highscore.html";

    } else if (initials === "") {
        alert("can't be blank");
    }

    showScore();
}



//timer and subtract time when asnwered wrong
var timeEl = document.querySelector('.count-down');
var counter = 30; // change this later

var countDown; 

function startTimer () {
    countDown = setInterval(function(){
        counter--;
        timeEl.textContent = 'Time left: ' + counter + ' S';
        // if (counter <= 0){ 
        //     timeEl.textContent = "GAME OVER";
        //     gameOver();
        // }

    }, 1000);
}
//add buttons events here
startBtn.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", addToLocal);


