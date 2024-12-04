a = int(0);
b = int(0);
aux = int(0);

print("\nO algoritmo inverterá o valor das variáveis\n");

a = int(input("a : "));
b = int(input("b : "));

print(f"Valores inciais: a = {a} , b = {b}");

aux = a;

a = b;
b = aux;


print(f"Valores Finais: a = {a} , b = {b}");