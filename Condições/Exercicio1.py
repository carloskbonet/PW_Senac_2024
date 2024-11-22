numero = float(0);

print('O código verifica se o número é Positivo, Negativo ou Zero.\n');

# Input
numero = float(input('Digite: '));

# Output
if ( numero > 0 ):
    print('\nO número digitado é Positivo.');
if ( numero < 0 ):
    print('\nO número digitado é Negativo.');
if ( numero == 0 ):
    print(f'\nO número é Zero.');