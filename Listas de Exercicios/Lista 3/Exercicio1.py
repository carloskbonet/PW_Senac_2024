number = int(0);
result = int(0);

print ("O algoritmo exibe os números de 1 a N\n");

number = int(input("Digite N: "));

for i in range(1 , number + 1, 1):
    result = i ** 2;

    print(f'Quadrado de {i} = {result}');