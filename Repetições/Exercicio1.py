count = int(0);
LIMIT = int(0);

# Explicação
print("O código irá decrementar o valor digitado até o limite.\n");

# Input
count = int(input("Valor: "));

# Processamento e Output
if ( count <= LIMIT ):
    print(f"Valor inválido.");
    exit();

while ( count > LIMIT ):
    print(f"{count}ª Iteração");

    count = count -1;