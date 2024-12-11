# Variáveis
numbers = [];
result = int(0);

# Explicação
print("Digite os números para a soma.\nDigite 0 para parar");

# Preencher o vetor (Input)
while(True):
    num = int(input("Digite: "));

    if (num == 0):
        break;

    numbers.append(num);

print(f'\n{numbers}');

# Percorrer os valores do vetor
for i in range(0 , len(numbers) , 1):  
    result = result + numbers[i];

# Output
print(f'\nSomatória dos valores do vetor : {result}');