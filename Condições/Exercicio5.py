numero = int(0);
resultado_3 = int(0);
resultado_5 = int(0);

print("O algoritmo verifica se o número digitado é divisível por 3 e 5.\n");

# Inputs
numero = int(input("Digite: "));

# Processamento
#  0             99  / 3           
resultado_3 = numero % 3;
resultado_5 = numero % 5;

# Output

if ( resultado_3 == 0 and resultado_5 == 0 ):
    print(f"\nO número é divisível por 3 e 5.");
else:
    if ( resultado_3 == 0 ):
        print(f"\nO número é divisível apenas por 3.");
    else:
        if ( resultado_5 == 0 ):
            print(f"\nO número é divisível apenas por 5.");
        else:
            print(f"\nNão é divisível.");