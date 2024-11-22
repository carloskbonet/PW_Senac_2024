nome = str('');
sobrenome = str('');
nomeCompleto = str('');

print('O algoritmo concatena o nome digitado\n');

nome = input("Nome: ");
sobrenome = input("Sobrenome: ");

# Processamento
nomeCompleto = nome + " " + sobrenome;

# Output

print(f"\n{nomeCompleto}");