numbers = []
hNumber = int(-999);
mNumber = int(999);

# Preencher o Vetor
while(True):
    num = int(input("Digite: ")); # Digitar um número
    if (num == 0): # Condição de parada
        break;
    numbers.append(num); # Inserir no vetor



for i in range (0 , len(numbers)):
    # Verificar qual é o maior número do vetor.
    if ( hNumber < numbers[i] ):
        hNumber = numbers[i];

    if (mNumber > numbers[i]):
        mNumber = numbers[i];
    

print(f"Maior número encontrado: {hNumber}");
print(f"Menor número encontrado: {mNumber}");

# hNumber = max(numbers);
# print(f"Maior número do vetor: {hNumber}");

