# Funções

def ParOuImpar( number:int ):
    DIV = float(2);
    result = float(0);

    # Processamento
    result = number % DIV;

    # Output
    if (result == 0):
         return "Par";
    else:
        return "Impar";


# Início real do algoritmo
userInput = int(0);
result = str("");

# Explicação do Algoritmo
print("O algoritmo verifica se o número digitado é par ou impar\n");

userInput = int(input("Digite: "));

result = ParOuImpar(userInput);

print(f'Resultado final: {result}');