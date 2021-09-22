//Fandom-quiz
//its a quiz about my fav topic. And its me and my books.
var readlineSync = require('readline-sync')
var Name = readlineSync.question("What's your name?  ");
console.log("Hey "+ Name );
console.log("Welcome to the quiz of Isha's loved books!");
//Now we have to create an array of objects
var score = 0 ;
function fandom(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Right\n");
    score++;
  }else{
     console.log("Wrong");
  }
}
var questions = [{
question: "What is the name of Isha's First book?\n 1.How to win friends\n2.I love her\n 3.None of these \n 4. All of these\n Answer :  ",
answer: "1"
},
{
  question:"What is her recommendation to everyone?\n 1.Think and grow rich \n 2. Rich dad poor dad \n 3. How to win friends \n 4. Anything your intrest says\n Answer : ",
  answer: "4"},
  {
  question: "What is the name of Isha's Last book?\n 1.How to win friends\n2.I love her\n 3.Atomic habits \n 4. All of these\n Answer :  ",
answer: "1"},

{
  question:"What is her recommendation to you ?\n 1.Think and grow rich \n 2. Rich dad poor dad \n 3.Eat that frog \n 4. Anything your intrest says\n Answer : ",
  answer: "4"},
  {
  question: "Who  is the her fav author?\n 1. Napolean Hill 2. You \n 3. Isha \n 4. Dale carnegie",
  answer:"2"

}]
for(var i = 0; i< questions.length; i++)
{
  
  
  var currentQuestion = questions[i];
  fandom(currentQuestion.question, currentQuestion.answer)

}
if(score==2){
  console.log("Your Highest score is :  " +score);
  console.log("Here are Highest score: \n 1.Isha \n 2. Rachit \n 3." + Name +"\n  Thankyou for playing this Fandom!  ");
}else{ 
console.log("Your Highest score is :  " +score);
console.log("Here are Highest score: \n 1.Isha \n 2. Rachit \n  Thankyou for playing this Fandom!  ");}
