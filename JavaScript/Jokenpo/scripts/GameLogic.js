player = "";
computer = "";

// 1 para Pedra / 2 para Papel / 3 para Tesoura
playerNumber = 0;
randomNumber = 0;

// Elementos do html
response = document.getElementById("response");

function PlayerChoice(_number) {
    playerNumber = _number;

    switch (_number) {
        case 1:
            player = "Pedra";
            break;
        case 2:
            player = "Papel";
            break;
        case 3:
            player = "Tesoura";
            break;
    }
}