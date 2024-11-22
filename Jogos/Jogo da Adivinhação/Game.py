import random;
import os;

# Variáveis
RandomNumber = int(0);
PlayerAttempt = int(0);
PlayerInputMenu = int(0);

# Variável para a dica
PlayerTip = int(0);

# Intervalos
MIN = int(1);
MAX = int(100);

# Limitações
NumberOfTips = int(3);
NumberOfTries = int(4);

# Explicação do Jogo 
print("- Jogo da Adivinhação - ");
print(f"Adivinhe o número que vou sortear. É um número entre {MIN} e {MAX}");
print("Você tem 3 tentativas. Boa Sorte !! 👌👍👍👍😸😎😎😎🤯\n");

# Gerar o número aleatório
RandomNumber = random.randint(MIN , MAX);

print(f'Número gerado aleatoriamente :{RandomNumber}\n');

while(True):
    # Menu do Jogo. Informar as opções e o que o usuário deve digitar
    print(f"\nTentativas Restantes: {NumberOfTries} // Dicas: {NumberOfTips} ")
    print("Digite 1 para tentar adivinhar");
    print("Digite 2 para pedir uma dica")
    print("Digite 3 para Desistir");

    PlayerInputMenu = int(input("Digite: "));

    if ( PlayerInputMenu == 1 ):
        print (f"\nVai tentar acertar o número né? Boa sorte");
        PlayerAttempt = int(input("Digite: "));

        NumberOfTries = NumberOfTries - 1;

        if ( PlayerAttempt == RandomNumber ):
            print(f"\nHahaha você err... Ãn? Caraca, acertou mesmo, parabéns");
            break;
        else:
            print(f"\nHhahhahaha muito longe");

        if ( NumberOfTries == 0 ):
            print(f'\nGAME OVER');
            break;

    if ( PlayerInputMenu == 2 and NumberOfTips > 0):
        # Dicas para o jogador
        print(f"\nPrecisa de uma dica para vencer? Que fraquinho 🤨");
        PlayerTip = int(input("Digite: "));

        NumberOfTips = NumberOfTips - 1;

        if ( PlayerTip < RandomNumber ):
            print(f"\nO número que eu escolhi é maior");
        if ( PlayerTip > RandomNumber ):
            print(f"\nO meu número é menor");
        if ( PlayerTip == RandomNumber ):
            print(f"\nEita... Se vira, quer dica pra que");

    if ( PlayerInputMenu == 3 ):
        break;

    input("\nAperte ENTER para continuar . . .");
    os.system("cls");