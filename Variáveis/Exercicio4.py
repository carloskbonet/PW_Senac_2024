valorInicial = float(0);
desconto = float(0);
calculoDesconto = float(0);
valorFinal = float(0);

print("O algoritmo calcula o desconto aplicado na compra.");
print("Desconto de 0 a 100%");

valorInicial = float(input("Valor Inicial: "));
desconto = float(input("Desconto: "));

# Processamento

calculoDesconto = valorInicial * (desconto/100);
valorFinal = valorInicial - calculoDesconto;

# Output

print(f"\nValor Inicial: {valorInicial} R$");
print(f"Valor Desconto: {calculoDesconto} R$");
print(f"Valor Final: {valorFinal} R$");