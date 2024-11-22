penultimo = int(0);
ultimo = int(1);

proximo = int(0);

# Sequência até 100
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

print("O algoritmo exibirá a sequência fibonacci.\n");

print(penultimo);
print(ultimo);

while ( proximo < 200 ):
    proximo = penultimo + ultimo;

    print(proximo);

    penultimo = ultimo;
    ultimo = proximo;
