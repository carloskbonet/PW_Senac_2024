nota_1 = float(0);
nota_2 = float(0);
nota_3 = float(0);
nota_final = float(0);

NOTA_CORTE = float(7);

print('O algoritmo verifica se o aluno foi aprovado ou não.');
print('As notas são de 0 a 10 pontos.\n');

# Inputs
nota_1 = float(input('Nota 1: '));
nota_2 = float(input('Nota 2: '));
nota_3 = float(input('Nota 3: '));

if ( nota_3 < 0 or nota_3 > 10 ):
    print('Nota Inválida.');
    exit();

# Processamento
nota_final = (nota_1 + nota_2 + nota_3) / 3 ;

# Output

if ( nota_final >= NOTA_CORTE ):
    print(f'\nAluno Aprovado. Nota Final: {nota_final}');
else:
    print(f'\nAluno Reprovado. Nota Final: {nota_final}');