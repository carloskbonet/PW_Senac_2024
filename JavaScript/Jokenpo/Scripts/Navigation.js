var startButton = document.getElementById("startBtn");

function StartGame() {
    window.location.replace('./game.html');
}

startButton.onclick = StartGame;


// startButton.addEventListener('click' , (event) => {
//     window.location.replace('./game.html');
// });

