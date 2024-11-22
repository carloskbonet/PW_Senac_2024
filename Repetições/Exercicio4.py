number = int(0);
result = int(0);
multiplier = int(0);

print("O algoritmo calcula o Fatorial do número digitado.\n");

# Input
number = int(input("Digite: "));

# Processamento
# Inicializa o multiplier com o número digitado
multiplier = number;

for i in range( (number-1) , 0, -1 ):
    # Calcula o resultado de cada iteração
    result = multiplier * i;

    print(f'{multiplier} x {i} = {result}');


    # Armazena o resultado para o próximo cálculo
    multiplier = result;

    