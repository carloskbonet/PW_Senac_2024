nota = float(0);
quantidadeNotas = int(0);
notaFinal = float(0);

NOTA_CORTE = float(7);

print('O algoritmo verifica se o aluno foi aprovado ou não.');
print('As notas são de 0 a 10 pontos.\n');

# Inputs / Processamento
print("Digite um valor menor que 0 para encerrar.\n");

while (True):
    nota = float(input('Nota: '));

    if ( nota < 0 ):
        break;

    if ( nota > 10 ):
        print("A nota não deve ultrapassar 10.");
    else:
        quantidadeNotas += 1;
        notaFinal += nota;

notaFinal = notaFinal / quantidadeNotas;

# Output
if ( notaFinal >= NOTA_CORTE ):
    print(f'\nAluno Aprovado. Nota Final: {notaFinal}');
else:
    print(f'\nAluno Reprovado. Nota Final: {notaFinal}');