# Variables
number = float(0);
result = float(0);
LIMIT = int(10);
# While Var
whileCount = int(1);

print("O algoritmo calcula a tabuada do número digitado.\n");

number = float(input("Digite: "));

# Resposta com FOR
for i in range(1, (LIMIT +1), 1):
    result = number * i;
    print(f"{int(number)} x {i} = {int(result)}");

# Resposta com While
while ( whileCount <= LIMIT ):
    result = number * whileCount;
    print(f"{int(number)} x {whileCount} = {int(result)}");

    whileCount += 1;