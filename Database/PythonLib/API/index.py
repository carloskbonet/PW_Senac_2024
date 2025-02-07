from datetime import datetime, timedelta
import Loan;
import Book;

menuOption = int(-1);

# Sessão do usuário
EMAIL = str('email@teste.com');


while (menuOption != 0):
    print('1 - Emprestar um Livro.');
    print('0 - Sair');

    menuOption = int(input('Digite: '));

    if (menuOption == 1):
        books = Book.select();
        print('\nLista de Livros\n');
        
        count = 1;
        for book in books['data']:
            print(f'{count} - {book[1]} (Autor: {book[4]})');
            count += 1;

        print('\nDigite o número correspondente do livro que deseja alugar.');
        bookSelection = int(input('Digite: '));
   
        # Emprestar o livro selecionado
        
        currentDate = datetime.now().date();
        daysDelta = timedelta(days=7);
        futureDate = currentDate + daysDelta;

        response = Loan.create(currentDate, futureDate, EMAIL , books["data"][bookSelection-1][3]);
    
        print(f'\n{response}');
    
        if ( response['status'] == 201 ):
            print(f'\nLivro locado na data: {currentDate}\nDevolver em: {futureDate}');


    input('\nAperte ENTER para continuar . . .');