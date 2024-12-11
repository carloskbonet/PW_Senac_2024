import time;
import os;
import random;

sequence = str("");
points = int(0);
scoreBoard = [];
#Logic
level = int(1);
MAX_LEVEL = 4;

# Explicação / Regras
os.system('cls');
print("--- Bem vindo ao Jogo da Memória !! 😸👍 ---");
print("Regras:\n1. Memorize a sequência que aparecer.\n2. Aguarde o campo para digitar e apresente a sequência.");
print("3. Não tente bugar o jogo.\n4. Divirta-se.");
time.sleep(1);

# Input


# Processamento
while(True):
    print("\nMenu do Jogo - Digite uma das opções abaixo:");
    print("1. Iniciar Partida.\n2. Exibir tabela de pontuações.\n3. Sair do Jogo.");
    inputMenu = int(input("Digite: "));

    if (inputMenu == 2):
        print("\nTabela:");
        for i in range(0, len(scoreBoard)-1, 2):
            print(f"Jogador: {scoreBoard[i]}  --  Pontos: {scoreBoard[i+1]}");

    if (inputMenu == 3):
        print("\nSaindo . . .");
        exit(0);

    if ( inputMenu == 1 ):
        os.system('cls');
        print("\nIniciando o Jogo\n.");
        time.sleep(1.5);
        input("Aperte ENTER para continuar");
        os.system('cls');

        while(True):
            # Gerar sequência
            sequence = "";
            level = 1;
            points = 0;
            
            for i in range(0 , level, 1):
                randomNumber = str(random.randint(0,9));
                sequence += randomNumber;

            # Exibição da sequência
            print(f"Memorize a Sequência abaixo.\n---- {sequence}");
            time.sleep(1.5);
            os.system('cls');

            # Verificação do Resultado
            userTry = str(input("Digite a Sequência: "));
    
            if ( userTry == sequence ):
                print("Parabéns !! Você acertou");
                
                points += (2 * ( level **2));
                print(f"\nPontuação Atual: {points} Pontos\n");

                if (level >= MAX_LEVEL):
                    print("Boaaa, Você venceu todos os níveis! Vamos registrá-lo.");
                    playerName = input("Nome: ");

                    scoreBoard.append(playerName);
                    scoreBoard.append(points);

                    break;

                level += 1;
                input("\nAperte ENTER para Continuar.");
                os.system('cls');
            else:
                print(f"Game Over. O jogador atingiu o nível {level}");
                input("\nAperte ENTER para Continuar.");
                os.system('cls');
                break;

    input("Aperte ENTER para Continuar");
    os.system('cls');