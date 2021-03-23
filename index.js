var buttons = document.querySelectorAll('.button');

var correctAnswers = [
  document.querySelectorAll('.correct')
];
var answers = correctAnswers[0];
var selected = [];

function checkButton() {
  var getSelectedValue = document.querySelector('input[name="question1"]:checked');
  var getSelectedValue2 = document.querySelector('input[name="question2"]:checked');
  var getSelectedValue3 = document.querySelector('input[name="question3"]:checked');

  if (getSelectedValue !== null) {
    selected.push(getSelectedValue);
  } if (getSelectedValue2 !== null) {
    selected.push(getSelectedValue2);
  } if (getSelectedValue3 !== null) {
    selected.push(getSelectedValue3);
  }
  return selected;
}

var input1 = document.querySelectorAll('input[name=question1]');
var input2 = document.querySelectorAll('input[name=question2]');
var input3 = document.querySelectorAll('input[name=question3]');

for (input of input1) {
  input.addEventListener('click', function () {
    buttons[0].classList.add('button-active');
  })
}

for (input of input2) {
  input.addEventListener('click', function () {
    buttons[1].classList.add('button-active');
  })
}

var totalScore = 0;
function calcTotalScore(arr1, arr2) {
  arr1.forEach((element) => arr2.forEach((element2) => {
    if (element === element2) {
      totalScore = totalScore + 1;
    }
  }))
  return totalScore
}

var userScore = document.querySelector('.total-score')
function updateUserScore() {
    userScore.textContent = `${totalScore} out of 3 correct`;
    userScore.classList.replace('total-score', 'total-score-active')
}

function setActiveQuestion() {

  var questions = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
  ];

  if (questions[0].classList.contains('show-active')) {
    questions[0].classList.remove('show-active');
    questions[1].classList.add('show-active');
  }
  else if (questions[1].classList.contains('show-active')) {
    questions[1].classList.remove('show-active');
    questions[2].classList.add('show-active');
  }
  else if (questions[2].classList.contains('show-active')) {
    buttons[2].classList.remove('button-active')
  }
}
  
for (button of buttons) {
  button.addEventListener('click', function () {
    setActiveQuestion();
  })
}

var submit = document.querySelector('.submit-quiz');
function hideButton() {
  submit.classList.remove('submit-quiz-active');
  return submit;
}

for (input of input3) {
  input.addEventListener('click', function () {
    buttons[2].classList.add('button-active');
    submit.classList.add('submit-quiz-active')
  })
}

submit.addEventListener('click', function () {
  checkButton();
  calcTotalScore(answers, selected);
  updateUserScore();
  hideButton()
})

var backBtns = document.querySelectorAll('.back');
function prevQuestion() {
  var questions = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
  ];
  if (questions[1].classList.contains('show-active')) {
    questions[1].classList.remove('show-active');
    questions[0].classList.add('show-active')
  } else if (questions[2].classList.contains('show-active')) {
    questions[2].classList.remove('show-active');
    questions[1].classList.add('show-active');
  }
}

for (var button of backBtns) {
  button.addEventListener('click', function () {
    prevQuestion();
  })
}