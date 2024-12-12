listOfNames = [
    "A era do gelo 4",
    "Kung Fu Panda 2",
    "Harry Potter",
    "Percy Jackson",
    "Senhor dos Aneis"
];

copy = [];

print(f"Lista de Nomes: {listOfNames}  \n/  Copia : {copy}");

# Transferir de um vetor para o outro
# Armazenar o "Pop" em uma variável e inserir no outro vetor.

# for i in range(0, len(listOfNames)):
#     removed = listOfNames.pop();
#     copy.append(removed);

while( len(listOfNames) > 0 ):
    removed = listOfNames.pop();
    copy.append(removed);

copy.sort();

print(f"\nLista de Nomes: {listOfNames}  \n/  Copia : {copy}");
