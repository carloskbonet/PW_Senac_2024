result = int(0);
LIMIT = int(10);

print("O algoritmo calcula a soma dos números de 1 ao Limite.\n");

for i in range( 1, (LIMIT+1), 1):
    result = result + i;

    print(f'{result-i} + {i} = {result}');