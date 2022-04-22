var readlineSync= require('readline-sync');
var score=0;
//INPUT
var userName=readlineSync.question('Hello, may I have your name?: ')
userName=userName.toUpperCase();
console.log('Welcome '+userName+' to the MARVEL quiz!');

//FUNCTION
function play(question,answer)
  {
    var userAnswer=readlineSync.question(question);
    if(userAnswer===answer){
      console.log("you are RIGHT!");
      score++;
    }
    else{
      console.log("you are WRONG!");
    }
    console.log('Your current score is: ', score);
    console.log('--------------');
  }
//array of objects
var questions=[{
  question: 'How many sequels does IRON MAN movie has ? ',
  answer: 'three'
}, {
  question: "What is thor's hammer called ? ",
  answer: "mjolnir"
               },{
  question: "What was the name of last movie of MARVEL in which thanos was defeated? ",
  answer: 'avengers endgame'
},{
  question: "In which year Avengers Endgame came out? ",
  answer: '2019'
  },{
  question: "Which hero's arm got burnt due to the usage of infinity stones? ",
  answer: "hulk"
  }]

for(var i=0; i<questions.length; i++){
  var currentQuestion=(questions[i]);
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Thankyou for your participation "+userName+" !");
console.log("Your final score is: ", score);