name = str("");
gender = str("");
mStatus = str("");
mTime = int(0);

print("Formulário de Cadastro.\n");

name = input("Nome: ");
print("F ou M");
gender = input("Sexo: ");
# Verificar se digitou valores dentro do padrão estabelecido
if ( gender.lower() != "f" and gender.lower() != "m" ):
    print("Sexo inválido.");
    exit(0);

print("S = Solteiro(a) our C = Casado(a)");
mStatus = input("Estado Civil: ");

# Verificar se digitou valores dentro do padrão estabelecido
if ( mStatus.lower() != "s" and mStatus.lower() != "c" ):
    print("Estado civil inválido.");
    exit(0);

# Input condicional
if ( mStatus.lower() == "c" ):
    mTime = int(input("Duração do casamento: "));

# Exibição dos dados cadastrados

print(f"\nNome: {name} - Sexo: {gender}");
if (mStatus.lower() == 's'):
    print("Estado Civil : Solteiro(a)");
else:
    print("Estado Civil : Casado(a)");
    print(f"Tempo de casamento: {mTime} anos");
