import User;

# Menu para testar o CRUD do usuário

menuOption = int(-1);

while (menuOption != 0):
    print('1 - Criar.\n2 - Selecionar.\n3 - Buscar por Email\n4- Atualizar\n5 - Deletar usuário');
    print('0 - Sair');

    menuOption = int(input('Digite: '));

    # Create
    if (menuOption == 1):
        print('\nFormulário para a criação de um Usuário.\n');
        email = input('Email: ');
        password = input('Senha: ');
        name = input('Nome: ');
        cpf = input('cpf: ');
    
        response = User.create(email, password, name, cpf);
        print(response);

    # Select
    if (menuOption == 2):
        print('\nUsuários:\n');

        response = User.select();
        print(response);

    # Find
    if (menuOption == 3):
        email = input('\nEmail do Usuário: ');
        print('\nUsuário:\n');

        response = User.findByEmail(email);
        print(response);
    
    # Update
    if (menuOption == 4):
        print('\nAtualizar o usuário.\nCampos disponíveis: email, password, name, cpf.\n');
        field = input('Campo para atualizar: ');
        email = input('Email do usuário: ');
        newValue = input('Novo valor: ');
    
        response = User.update(field, email, newValue);
        print(response);

    # Delete
    if (menuOption == 5):
        email = input('\nEmail do Usuário: ');
        
        response = User.delete(email);
        print(response);

    input("Aperte ENTER para continuar . . .");