import os;

# Variables
number = float(0);
result = float(0);
LIMIT = int(10);

print("O algoritmo calcula a tabuada do número digitado.");
print("Digite 0 para encerrar.\n");

while ( True ):
    # O usuário deve digitar o número para calcular a tabuada 
    number = float(input("Digite: "));

    # Condição de Parada
    if ( number == 0 ):
        break;

    # Cálculo de Tabuada
    for i in range(1, (LIMIT +1), 1):
        result = number * i;
        print(f"{int(number)} x {i} = {int(result)}");

    # Limpar a Tela
    input("\nAperte ENTER para Continuar.");
    os.system("cls");
