inputSequence = str("");
numberOfVowels = int(0);


print("O algoritmo calcula quantas vogais aparecem no texto digitado.\n");

inputSequence = input("Digite\n:  ");

# Processamento

for letter in inputSequence:
    if ( letter.lower() == 'a' ):
        numberOfVowels += 1;

    if ( letter.lower() == 'e' ):
        numberOfVowels += 1;

    if ( letter.lower() == 'i' ):
        numberOfVowels += 1;

    if ( letter.lower() == 'o' ):
        numberOfVowels += 1;

    if ( letter.lower() == 'u' ):
        numberOfVowels += 1;


print(f'Número de vogais encontradas: {numberOfVowels}');