var startBtn = document.getElementById('start');
var scoreBtn = document.querySelector('.scoreBtn');
var viewScore = document.getElementById('submit');

var containerEl = document.getElementById('container');
var TitleEl = document.querySelector('.question-title');
var choices = document.querySelector('.answer-choices') 
var quizInfo= document.querySelector('.quiz-info'); 
var resultPage = document.getElementById('result-page'); 
var flexContainer = document.querySelector ('.flex');
var answerStatus = document.querySelector('.answer-status'); 
var score = document.getElementById('score');
var finalScore = document.getElementById('final-score');
var initialsEL = document.getElementById('initials-el'); 
var scoreInput = document.querySelector('.score-input');

var currentQuestionIndex = 0;

//Quiz Questions
var qAndA = [
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
