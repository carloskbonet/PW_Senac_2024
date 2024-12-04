raio = float(0);
area = float(0);
PI = float(3.14159265358979323846);

print("\nCálculo da área do círculo\n");

raio = float(input("Raio : "));

# pow(raio , 2)
# raio ** 2
# raio * raio

area = PI * ( raio ** 2 );

print(f'\nResultado: {area:.2f}');