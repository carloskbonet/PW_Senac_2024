fahrenheit = float(0);
celsius = float(0);

print("\nConversão de °F para °C\n");

fahrenheit = float(input("Valor em °F : "));

celsius = (fahrenheit / 1.8) - 32;

print(f'\nResultado: {celsius:.2f} °C');