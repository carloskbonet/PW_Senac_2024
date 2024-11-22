# Variáveis
altura = float(0);
largura = float(0);
resultado = float(0);

# Explicação
print("O algoritmo calcula a área do retângulo.");
print("Digite os valores solicitados abaixo:\n");

# Entrada de Dados
altura = float(input('Altura: '));
largura = float(input('Largura: '));

# Processamento
# =   ==   ===
# Se altura for igual a largura
if ( altura == largura ):
    print(f'\nOs dados não formam um retângulo, impossível de calcular.');
    exit(0);

# P ->  Altura maior que 0
# Q ->  Largura maior que 0
# operador "e" ^  // operador "ou" v

if ( altura > 0 and largura > 0 ):
    resultado = altura * largura;

    # Saída de Dados
    print(f'\nResultado: {resultado}');
else:
    # Saída de Dados
    print(f'\nImpossível de calcular. Digite valores positivos.');