$(document).ready()

var questions =[];
var questionsCorrect;
var timeLeft = 20;
var interval = setInterval(countdown, 1000);
var correctAnswers = ['b','a','c','a'];
var selectedValue = [];

function countdown() {
  timeLeft--;
  $('#timer').html("Time Remaining " + timeLeft); 
  if (timeLeft === 0){
		alert('Time Over');
		clearInterval(interval);
		result();
	}

}

countdown();

function getSelectedValue(){
	var q1value = $('input[name="answer1"]:checked').val();
	var q2value = $('input[name="answer2"]:checked').val();
	var q3value = $('input[name="answer3"]:checked').val();
	var q4value = $('input[name="answer4"]:checked').val();
	selectedValue.push(q1value, q2value, q3value, q4value);
}

function checkAnswers(){
	if (selectedValue[0] === correctAnswers[0]){
		alert('Answer Correct');
		console.log()
}	else{
		alert ('Incorrect Answer');
}
	if (selectedValue[1] === correctAnswers[1]){
		alert('Answer Correct');
		console.log()
}	else{
		alert ('Incorrect Answer');
}
	if (selectedValue[2] === correctAnswers[2]){
		alert('Answer Correct');
		console.log()
}	else{
		alert ('Incorrect Answer');
}
	if (selectedValue[3] === correctAnswers[3]){
		alert('Answer Correct');
		console.log()
}	else{
		alert ('Incorrect Answer');
}
}

function result(){
	getSelectedValue();
	checkAnswers();
}

$('#submit').on('click', function(){
	timeLeft=1;

});
	