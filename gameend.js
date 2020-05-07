const currentScore = localStorage.getItem('currentScore');

const finalScore = document.getElementById('gameScore');

finalScore.innerText = currentScore;