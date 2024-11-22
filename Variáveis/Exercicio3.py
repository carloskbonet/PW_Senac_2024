celsius = float(0);
fahrenheit = float(0);
fahrenheit_round = float(0);

print("O algoritmo converte a temperatura de °C para °F.\n");

celsius = float(input("Digite: "));

# Processamento

fahrenheit = (1.8 * celsius) + 32;

fahrenheit_round = round( fahrenheit , 2 );

#fahrenheit = ( (9 / 5)  * celsius) + 32;

# Saída de Dados

print(f"\nResultado: {fahrenheit_round}");