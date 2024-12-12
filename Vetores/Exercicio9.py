numbers = [ 1 , 9 , 3 , 0 , 4 , 7 , 2 , 100 , 3 , 2 ];

# Ordenação / Verificação


# Solução 1

# vectorCopy = numbers.copy();

# vectorCopy.sort();

# if (numbers == vectorCopy):
#     print("Está Ordenado.");
# else:
#     print(f"Não está ordenado.\nFormato ordenado: {vectorCopy}")


# Solução 2
for i in range(0, len(numbers)):
    # Verificar se está ordenado
    # Podemos armazenar o número da verificação anterior.
    # Se o numbers[i] for menor que o número anterior, o vetor não está ordenado
