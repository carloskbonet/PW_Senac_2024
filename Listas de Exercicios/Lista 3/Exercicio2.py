num1 = int(0);
num2 = int(0);
result = int(0);


print("O algoritmo exibe os números impares dentro do intervalo digitado.");

num1 = int(input("Intervalo 1: "));
num2 = int(input("Intervalo 2: "));


for i in range(num1 , num2+1 , 1):
    result = i % 2;

    if (result > 0):
        print(i);
