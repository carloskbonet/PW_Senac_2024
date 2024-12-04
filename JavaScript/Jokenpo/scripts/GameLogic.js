var player = "";
var computer = "";

var playerImageURL = document.getElementById("playerResult");
var computerImageURL = document.getElementById("computerResult");

// 1 para Pedra / 2 para Papel / 3 para Tesoura
var playerNumber = 0;
var computerNumber = 0;

// Elementos do html
var response = document.getElementById("response");

// Imagens da resposta
var crown = document.getElementById("crown");
var skull = document.getElementById("skull");


function Start(_playerChoice) {
    // Escolha do Jogador
    playerNumber = _playerChoice;
    PlayerChoice();

    // Escolha do Computador
    computerNumber = Math.floor(Math.random() * 3 ) + 1; // Geração de um número aleatório
    ComputerChoice();

    console.log(`Escolha do Jogador: ${player}\nEscolha do Computador: ${computer}`);


    // Lógica do Jogo
    // Decidir o vencedor e o perdedor
    let win = false;

    // Testar todas as possibilidades onde o jogador é o vencedor. Ao final, exibir uma mensagem na tela.
    if ( player == "Pedra" && computer == "Tesoura" )
        win = true;

    if ( player == "Papel" && computer == "Pedra" )
        win = true;

    if ( player == "Tesoura" && computer == "Papel" )
        win = true;


    // Exibir resposta (output)
    if (win == true)
    {
        response.textContent = `Jogador Venceu !!  ${player} x ${computer}`;

        crown.style.display = "block";
        skull.style.display = "none";
    }
    else
    {
        response.textContent = `Jogador Perdeu F  ${player} x ${computer}`;

        skull.style.display = "block";
        crown.style.display = "none";
    }
}


function PlayerChoice() {
    switch (playerNumber) {
        case 1:
            player = "Pedra";
            playerImageURL.src = "../Images/rock.png"
            break;
        case 2:
            player = "Papel";
            playerImageURL.src = "../Images/paper.png";
            break;
        case 3:
            player = "Tesoura";
            playerImageURL.src = "../Images/scissor.png";
            break;
    }
}

function ComputerChoice() {
    switch (computerNumber) {
        case 1:
            computer = "Pedra";
            computerImageURL.src = "../Images/rock.png"
            break;
        case 2:
            computer = "Papel";
            computerImageURL.src = "../Images/paper.png";
            break;
        case 3:
            computer = "Tesoura";
            computerImageURL.src = "../Images/scissor.png";
            break;
    }
}
