from datetime import datetime;

birthYear = int(0);
currentYear = int(0);
checkElectionYear = int(0);

yOld = int(0);


print("Simulação de Eleição.");
print("Regras: Eleições ocorrem de 5 em 5 anos.\n");

birthYear = int(input("Ano de nascimento: "));

# Processamento
# Calculando a idade do usuário

currentYear = (datetime.now().year);
#currentYear = 2025;

yOld = currentYear - birthYear;

if ( yOld < 1 ):
    print("Ano de nascimento inválido");
    exit(0);

print(f'\nO usuário tem {yOld} anos.\n');

checkElectionYear = currentYear % 5;

# Verificando se estamos em um ano de eleição
if ( checkElectionYear == 0 ):
    print("Estamos em um ano de eleição.\n");

    # Verificação da idade do usuário
    if ( yOld >= 16 and yOld <= 18):
        print("O usuário pode votar na eleição atual.");
    else:
        if (yOld > 18):
            print("O usuário deve votar na eleição atual.");
        else:
            print("O usuário NÃO poderá votar na eleição atual.");

else:
    print("Não estamos em um ano de eleição.\n");

    # Último ano de eleição
    lastElection = currentYear - checkElectionYear;
    print(f"Ano da última eleição: {lastElection}");

    # Próxima eleição
    nextElection = lastElection + 5;
    print(f"Ano da próxima eleição: {nextElection}");

    futureYOld = yOld + (nextElection - currentYear);
    print(f"Idade do usuário na próxima eleição: {futureYOld} anos\n");

    # Verificação da idade do usuário
    if ( futureYOld >= 16 and futureYOld <= 18):
        print("O usuário poderá votar na próxima eleição.");
    else:
        if (futureYOld > 18):
            print("O usuário deverá votar na próxima eleição.");
        else:
            print("O usuário NÃO poderá votar na próxima eleição.");
