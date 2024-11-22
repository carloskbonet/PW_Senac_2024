ano = int(0);
resultado = float(0);

VERIFICADOR = int(4);

print('O algoritmo verifica se o ano digitado é Bissexto\n');

ano = int(input("Ano: "));

# Processamento
resultado = ano % VERIFICADOR;

# Output

if ( resultado == 0 ):
    print(f'O ano {ano} é um ano Bissexto.');
else:
    print(f'O ano {ano} NÃO é um ano Bissexto.');