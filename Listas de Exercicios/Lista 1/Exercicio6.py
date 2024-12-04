value_1 = float(0);
value_2 = float(0);
value_3 = float(0);

result = float(0);

print(f'\nMédia ponderada das notas.\n');

# Inputs
value_1 = float(input("Nota 1: ")); # Peso 2
value_2 = float(input("Nota 2: ")); # Peso 3
value_3 = float(input("Nota 3: ")); # Peso 5

# Processamento

result = (( value_1 * 2 ) + (value_2 * 3) + (value_3 * 5)) / 10;

print(f'\nMédia: {result}');