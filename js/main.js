let possibleAnswers = [
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

window.onload = function () {
    let eightBallOuter = document.getElementById('eightBallOuter');
    let number8 = document.getElementById('number8');
    let answers = document.getElementById('answers');
    let question = document.getElementById('question');
    let submit = document.getElementById('submit');

    submit.addEventListener('click', function() {
        if (question.value.length < 1) {
            alert('Please type your question if you want an answer!');
        } else {
            number8.innerText = '';
            let response = Math.floor(Math.random() * Math.floor(possibleAnswers.length));
            answers.innerText = possibleAnswers[response];
        }
    });
};