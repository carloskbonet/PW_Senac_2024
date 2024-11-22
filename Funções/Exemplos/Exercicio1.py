

def Div3_5( number:int ) -> bool:
    result_3 = int(0);
    result_5 = int(0);

    # Processamento     
    result_3 = number % 3;
    result_5 = number % 5;

    # Retorno
    if ( result_3 == 0 and result_5 == 0 ):
        return True;
    else:
        return False;

# Início do algoritmo
InputNumber = int(0);
result = bool(False);

print("O algoritmo verifica se o número digitado é divisível por 3 e 5.\n");

InputNumber = int(input("Digite: "));

result = Div3_5(InputNumber);

if ( result == True ):
    print("É divisível.");
else:
    print("Não é divisível.");





# if ( Div3_5(InputNumber) ):
#     print("É divisível.");
# else:
#     print("Não é divisível.");