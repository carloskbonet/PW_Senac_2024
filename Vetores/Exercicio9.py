numbers = [ 1 , 9 , 3 , 0 , 4 , 7 , 2 , 100 , 3 , 2 ];

# Ordenação / Verificação

# Solução 1
for i in range(1, len(numbers)):
    # Verificar com o valor da posição anterior
    if ( numbers[i] < numbers[i - 1] ):
        print(f"Não está ordenado.\n{numbers}\n");
        numbers.sort();
        print(f"Vetor ordenado: \n{numbers}");
        exit();



# Se chegar até aqui significa que o vetor está ordenado
print(f"O vetor está corretamente ordenado.\n{numbers}");




# Solução 2

# vectorCopy = numbers.copy();
# vectorCopy.sort();

# if (numbers == vectorCopy):
#     print("Está Ordenado.");
# else:
#     print(f"Não está ordenado.\nFormato ordenado: {vectorCopy}")