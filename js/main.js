const possibleAnswers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];

const input = document.getElementById('question');
input.addEventListener('keyup', function(event) {
  if (event.code === 'Enter') {
   event.preventDefault();
   document.getElementById('submit').click();
  }
});

function shake(){
    const ball= document.getElementById('eightBallOuter');
    ball.classList.add('shake');
    setTimeout(function(){ ball.classList.remove('shake'); }, 1500);
 };

window.onload = function () {
    const AskQuestion = document.getElementById('AskQuestion');
    const questionText = document.getElementById('questionText');
    const restart = document.getElementById('restart');
    const number8 = document.getElementById('number8');
    const answers = document.getElementById('answers');
    const question = document.getElementById('question');
    const submit = document.getElementById('submit');
    restart.style.display = 'none';

    submit.addEventListener('click', function() {
        if (question.value.length < 6) {
            alert('Please type your question if you want an answer!');
        } else {
            AskQuestion.style.display = 'none';
            restart.style.display = 'block';
            number8.innerText = '';
            questionText.innerText = question.value;
            let response = Math.floor(Math.random() * Math.floor(possibleAnswers.length));
            setTimeout(function() {answers.innerText = possibleAnswers[response];}, 1500);
        }
    });

    restart.addEventListener('click', function () {
        location.reload();
    });
};