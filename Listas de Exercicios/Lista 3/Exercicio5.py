heigth = int(0);

print("O algoritmo exibe uma pirâmide de asteriscos\n");

heigth = int(input("Digite a altura da pirâmide: "));

for i in range ( 1 , heigth+1 , 1):

    #print(" " * (heigth - i) + "*" * (i * 2-1) );

    print ( " " * (heigth-i) , end="" );
    print( "*" * (2 * i -1) );
