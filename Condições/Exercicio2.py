divisor = float(10);
dividendo = float(2);
resultado = float(0);

print('O algoritmo verifica se o número digitado é Par ou Impar.\n');

# Processamento
resultado = divisor % dividendo;

# Output
if (resultado == 0):
    print(f'\nO número é Par.');
else:
    print(f'\nO número é Impar.');
