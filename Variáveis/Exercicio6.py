# Variáveis de Input
valorInicial = float(0);
taxa = float(0);
periodo = int(0);
# Variáveis de Output
taxaConvertida = float(0);
valorJurosDia = float(0);
valorFinal = float(0);

print("\nFatura atrasada, cálculo de juros por dia.\n");

valorInicial = float(input("Valor da Fatura: "));
taxa = float(input("Taxa por dia (0 a 100): "));
periodo = float(input("Atraso por x dias: "));

# Processamento
taxaConvertida = taxa / 100;
valorJurosDia = valorInicial * taxaConvertida;
valorFinal = (valorJurosDia * periodo) + valorInicial;

print(f'\nValor da Fatura: {valorInicial} R$');
print(f'Taxa: {taxa} %');
print(f'Valor por dia: {valorJurosDia} R$');
print(f'Valor Final da fatura: {valorFinal} R$');