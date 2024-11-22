result = int(0);

print("O algoritmo calcula o Fatorial do número digitado.\n");

# Input
result = int(input("Digite: "));

# Processamento

for i in range( (result-1) , 0, -1 ):
    # Calcula o resultado de cada iteração
    result = result * i;

    print(f'{int(result / i)} x {i} = {result}');

    