import Book;

# Menu para testar o CRUD do usuário

menuOption = int(-1);

while (menuOption != 0):
    print('1 - Criar.\n2 - Selecionar.\n3 - Buscar por ISBN\n4- Atualizar\n5 - Deletar');
    print('0 - Sair');

    menuOption = int(input('Digite: '));

    # Create
    if (menuOption == 1):
        print('\nFormulário para a criação de um Livro.\n');
        title = input('Título: ');
        releaseDate = input('Data de lançamento: ');
        isbn = input('ISBN: ');
        author = input('Autor: ');
        genre = input('Gênero do Livro: ');

        response = Book.create(title, releaseDate, isbn, author, genre);
        print(response);

    # Select
    if (menuOption == 2):
        print('\Livros:\n');

        response = Book.select();
        print(response);

    # Find
    if (menuOption == 3):
        isbn = input('\nISBN: ');
        print('\nUsuário:\n');

        response = Book.findByEmail(isbn);
        print(response);
    
    # Update
    if (menuOption == 4):
        print('\nAtualizar o usuário.\nCampos disponíveis: title, releaseDate, isbn, authorName, genre.\n');
        field = input('Campo para atualizar: ');
        isbn = input('ISBN: ');
        newValue = input('Novo valor: ');
    
        response = Book.update(field, isbn, newValue);
        print(response);

    # Delete
    if (menuOption == 5):
        email = input('\nISBN: ');
        
        response = Book.delete(isbn);
        print(response);

    input("Aperte ENTER para continuar . . .");