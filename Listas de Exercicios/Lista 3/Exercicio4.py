# Opções na votação
cand_1 = int(0);
cand_2 = int(0);
cand_3 = int(0);
cand_4 = int(0);
null = int(0);
blank = int(0);
options = "123456";

# Variáveis
inputVote = int(0);
repCount = int(1);
repLimit = int(0);

# Explicação
print('Simulação de eleição.\n');

# Inputs
repLimit = int(input("Número de votadores: "));

while ( repCount <= repLimit ):
    inputVote = int(input(f"Pessoa {repCount}, digite seu voto: "));

    if ( inputVote == 1 ):
        cand_1 += 1;
    if ( inputVote == 2 ):
        cand_2 += 1;
    if ( inputVote == 3 ):
        cand_3 += 1;
    if ( inputVote == 4 ):
        cand_4 += 1;
    if ( inputVote == 5 ):
        null += 1;
    if ( inputVote == 6 ):
        blank += 1; 

    if str(inputVote) not in options:
        print("Voto inválido.");
    else:
        repCount += 1;

print(f'\nVotos por candidatos:');
print(f'C1 : {cand_1} , C2 : {cand_2} , C3 : {cand_3} , C4 : {cand_4}');
print(f'Nulos : {null} , Em Branco : {blank}');