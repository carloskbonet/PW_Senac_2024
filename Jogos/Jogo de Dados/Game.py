import Logic;
import time;
import os;

Player1Points = int(0);
Player2Points = int(0);
Player3Points = int(0);

# Explicação das regras do jogo

while(True):
    Player1Points = Logic.DiceGameLogic("Jogador 1" , Player1Points);
    if ( Player1Points < 0):
        break;
    
    Player2Points = Logic.DiceGameLogic("Jogador 2", Player2Points);
    if (Player2Points < 0 ):
        break;
    
    Player3Points = Logic.DiceGameLogic("Jogador 3", Player3Points);
    if (Player3Points < 0 ):
        break;

    time.sleep(2);
    os.system("cls");