/* NFL CHALLENGE TRIVIA APP */
$(document).ready(function() {


//Declare & initialize gobal variables
var qCounter = 0,
    userAnswer,
    validAnswer,
    scoreHome = 0,
    scoreAway = 0,
    clock = 5,
    highLightAnswer;


//Define array of objects - slightly modified mentor's suggestion
var questions = [
 {
    question: "Who won the fist Super Bowl?",
    choices: ["Dallas Cowboys", "Green Bay Packers", "Carolina Panthers"],
    correctAnswer: 2
 },
 {
    question: "What QB guaranteed a victory in Super Bowl III?",
    choices: ["Johnny Unitas", "Bart Star", "Joe Namath"],
    correctAnswer: 3
 },
 {
    question: "Which of the following is the only team to have a perfect season and win the Super Bowl?",
    choices: ["Miami Dolphins", "Pittsburgh Steelers", "Chicago Bears"],
    correctAnswer: 1
 },
 {
    question: "In 1998, who tied a decades old NFL record by kicking a 63 yard field goal?",
    choices: ["Adam Vinatieri", "Stephen Gostkowski", "Jason Elam"],
    correctAnswer: 3
 },
 {
    question: "In 1983, John Elway was selected as the first overall pick by which NFL team?",
    choices: ["Baltimore Colts", "Denver Broncos", "Houston Oilers"],
    correctAnswer: 1
 }]


//Display question
function updateQuestion(){
    document.getElementById("question").innerHTML=questions[qCounter].question;
    document.getElementById("answer1").innerHTML=questions[qCounter].choices[0];
    document.getElementById("answer2").innerHTML=questions[qCounter].choices[1];
    document.getElementById("answer3").innerHTML=questions[qCounter].choices[2];
}


updateQuestion();  //Initial call as I did not use HTML defaults.


// Event "Submit" - grab answer & process
document.getElementById("submitButton").onclick=function(){

displayCorrect();
userAnswer = getAnswer();
validAnswer = checkAnswer();
updateStats();
setTimeout(displayAndReset, 4000);
}


function displayCorrect(){
// Hack solution
    // Concat 'answer' + correct answer # to derive HTML form id
    highLightAnswer = "answer" + questions[qCounter].correctAnswer;
    document.getElementById(highLightAnswer).style.background = "#66ff99";

}


function getAnswer(){
// Retrieve radio button identifier
    var answer = document.forms[0]
    for (var i=0; i < 3; i++){
        if (answer[i].checked){
            return i;
        }
    }
}


function checkAnswer(){
// Validate correct answer
    if (userAnswer+1 === questions[qCounter].correctAnswer){
        return true;
    } else {
        return false;
    }
}


function updateStats(){
    // Calculate score
    if (validAnswer == true){
        scoreHome += 7;
    } else {
        scoreAway +=7;
    }

    // Update clock value
    clock -=1;
}


function displayAndReset(){
// Consider breaking into separate pieces - doing too much?!?

     // Remove highlighted answer
    document.getElementById(highLightAnswer).style.background = "#FFFFFF";

    // Reset form - uncheck last answer
    document.getElementById("answer").reset();

    //Update scoreboard
    document.getElementById("homeScore").innerHTML = scoreHome;
    document.getElementById("timeLeft").innerHTML = "0"+clock+":00";
    document.getElementById("visitorScore").innerHTML = scoreAway;

    // Iterate question counter
    qCounter +=1;

    // Call next question
    updateQuestion();
    }
});