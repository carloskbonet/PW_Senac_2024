import time;
from Dice import Roll1d6;

def DiceGameLogic( playerName:str , playerPoints:int ):
    SkipTurn = bool(False);

    print(f"Turno do {playerName}");
    if ( playerPoints >= 16 ):
        print(f"\nVocê está com {playerPoints} Pontos e agora pode passar o turno.");
        print("Digite 1 para Jogar / Digite 2 para passar o turno.");
        inputMenu = int(input("Digite: "));
        
        if ( inputMenu == 2 ):
            SkipTurn = True;
        else:
            SkipTurn = False;

    if ( SkipTurn == False ):
        input("Aperte ENTER para jogar o dado.\n");

        print("Rolando o dado . . .");
        time.sleep(1);

        DiceResult = Roll1d6();
        playerPoints += DiceResult;
        print(f"\nResultado: {DiceResult}. Soma final: {playerPoints} Pontos\n");

    if ( playerPoints == 21 ):
        print(f"Vitória do {playerName}.");
        return -1;
    if ( playerPoints > 21 ):
        print(f"Game Over {playerName}.");
        return -1;

    return playerPoints;