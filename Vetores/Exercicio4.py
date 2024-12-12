
listOfNames = [
    "Jhonathan Joel",
    "Maria Silva",
    "Otavio Joarez",
    "Pablo Xico",
    "Diego de A era do Gelo"
];

print(f"Lista para a festa de fim de ano. Digite o nome para verificar se está na lista.\n");
print("Digite 0 para sair");

# Processamento

while(True):
    name = input("Nome: ");

    for i in range(0, len(listOfNames)):
        if (name.lower().replace(" ", "") == listOfNames[i].lower().replace(" ", "")):
            print("Nome encontrado.");

# while(True):
#     name = input("Nome: ");

#     if name in listOfNames:
#         print("Nome encontrado.");

