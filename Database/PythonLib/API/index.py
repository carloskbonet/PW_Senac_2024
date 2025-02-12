from datetime import datetime, timedelta
import Loan;
import Book;
import os;

menuOption = int(-1);

# Sessão do usuário
EMAIL = str('email@teste.com');


while (menuOption != 0):
    os.system('cls');
    print('1 - Emprestar um Livro.');
    print('2 - Visualizar livros emprestados.');
    print('0 - Sair');

    menuOption = int(input('Digite: '));

    if (menuOption == 1):
        books = Book.select();
        print('\nSelecione o livro para verificar a disponibilidade\n');
        
        count = 1;
        for book in books['data']:
            print(f'{count} - {book[1]} (Autor: {book[4]})');
            count += 1;

        print('\nDigite o número correspondente do livro que deseja alugar.');
        bookSelection = int(input('Digite: '));
   
        # Verificar disponibilidade
        loanByIsbn = Loan.findByIsbn(books["data"][bookSelection-1][3]);

        if ( loanByIsbn['status'] == 200 ):
            print('\nO livro NÃO está disponível para locação.');
        elif( loanByIsbn['status'] == 404 ):
            print('\nO livro está disponível para locação.');
            # Perguntar se desejar alugar o livro (Sim / Não)

            # Emprestar o livro selecionado
            currentDate = datetime.now().date();
            daysDelta = timedelta(days=7);
            futureDate = currentDate + daysDelta;

            response = Loan.create(currentDate, futureDate, EMAIL , books["data"][bookSelection-1][3]);
         
            if ( response['status'] == 201 ):
                print(f'\nLivro locado na data: {currentDate}\nDevolver em: {futureDate}');
            elif ( response['status'] != 201 ):
                print(f'\nNão foi possível realizar a locação do livro.');

    if (menuOption == 2):
        print('\nLivros emprestados.\n');
        
        loans = Loan.select(EMAIL);

        if ( loans['status'] == 200 ):
            
            count = 1;

            loanedBooks = []; # Lista de Livros emprestados
            for ln in loans['data']:
                bookById = Book.findById(ln[4]);
                loanedBooks.append(bookById['data']) # Armazena os livros encontrados

                print(f'{count} - {bookById['data'][1]}');
                count += 1;
        
            # Devolução
            print('\nDeseja devolver algum desses livros? Caso sim, digite o número respectivo. Digite 0 para sair.');
            bookSelection = int(input('Digite: '));

            if ( bookSelection == 0 or bookSelection > len(loans) ):
                print('Saindo . . .');
            else:
                # Devolver livro (Deletar locação)

                deletedLoan = Loan.delete(loanedBooks[bookSelection-1][3]);
        
                if ( deletedLoan['status'] == 201 ):
                    print('\nLivro devolvido com sucesso.');
                else:
                    print('\nAlgo deu errado. . .');
                    print(deletedLoan);

                
                    
        else:   
            print('Algo deu errado. . .');

    input('\nAperte ENTER para continuar . . .');