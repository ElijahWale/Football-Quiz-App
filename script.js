// defining constants
const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName("option-text"));
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const questionCounterNum = document.getElementById('questionCounter');
const scoreNum = document.getElementById('score');

const maximumQuestion = 5;
const questionScore = 5;

let scoreCounter = 0;
let totalScore = 0;
let currentQuestion ={};
let questionCounter = 0;
let  availableQuestion =[];
let acceptingAnswers = false;
let questionsAsked = [
    {
        question:"'La Liga' is the name of which European country’s professional football association?",
        option1:"Spain",
        option2:"England",
        option3:"Nigeria",
        option4:"Italy",
        answer:1
    },
    {
        question:"Name the Juventus goalkeeper who was the first winner of the Golden Foot Award?",
        option1:"Jurgen Klinsmann",
        option2:"De Gea",
        option3:"Gianluigi Buffon",
        option4:"Keylor Navas",
        answer:3
    },
    {
        question:"Harry Kane was the top scorer of the World Cup 2018. Who came second?",
        option1:"Antoine Griezmann",
        option2:"Kylian Mbappe",
        option3:"Romelu Lukaku",
        option4:"Option 1 and 3",
        answer:4
    },
    {
        question:"How many times did Alex Ferguson win the Premier League?",
        option1:"Eleventh(11)",
        option2:"Twenty(20)",
        option3:"Ten(10)",
        option4:"Thirteen (13)",
        answer:4
    },
    {
        question:"Which player scored the fastest hat-trick in the Premier League?",
        option1:"Pierre-Emerick Aubameyang",
        option2:"Sadio Mane",
        option3:"Mohamed Salah ",
        option4:"C.Ronaldo",
        answer:2
    }
];

// startButton.addEventListener('click',startGame);


function startGame(){
    questionCounter = 0;
    totalScore = 0;
    availableQuestion = [...questionsAsked]; 
    // console.log(availableQuestion);
    getNextQuestion();
};

function getNextQuestion(){
    if(availableQuestion.Length == 0 || questionCounter >= maximumQuestion){
        localStorage.setItem("currentScore", totalScore);
        return window.location.assign("gameend.html");
    }
    questionCounter++;
    questionCounterNum.innerText = questionCounter + "/" + maximumQuestion;
    const questionNum = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionNum];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestion.splice(questionNum, 1);
    // console.log(availableQuestion);
    acceptingAnswers = true;

    


};
 options.forEach(option => {
        option.addEventListener('click',e => {
            if(!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.dataset['number'];

           const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

           if(classToApply === 'correct'){
            incrementScore (questionScore);
           }
                
            selectedOption.parentElement.classList.add(classToApply);

            setTimeout(() => {
                 selectedOption.parentElement.classList.remove(classToApply); getNextQuestion();
            }, 1000);

           
          
            
           
           
        });
    });
    function incrementScore (num){
        totalScore += num;
        scoreNum.innerText = totalScore;
    }

// for next qestion to work
// nextButton.addEventListener('click',()=>{
    
    
   
// })
startGame();
