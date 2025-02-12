import sqlite3;
import User;
import Book;

connection = sqlite3.connect('LibDatabase.db');
cursor = connection.cursor();

# Criação da tabela

cursor.execute(
'''
CREATE TABLE IF NOT EXISTS Loan(
    id INTEGER PRIMARY KEY,
    borrowedAt DATE NOT NULL,
    returnAt DATE NOT NULL,

    userId INT NOT NULL,
    bookId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (bookId) REFERENCES Book(id)
);
'''
);

def create(_borrowedAt:str, _returnAt:str, _email:str , _isbn:str):
    try:
        user = User.findByEmail(_email);
    
        if ( user['status']  !=  200 ):
            return user;

        book = Book.findByIsbn(_isbn);
        
        if ( book['status']  !=  200 ):
            return book;
    
        loanByIsbn = findByIsbn(_isbn);

        if ( loanByIsbn['status'] != 404 ):
            return { 'status' : 403 , 'message' : 'Book Unavailable' };

        # Verificações feitas, agora a locação pode ser criada
        cursor.execute('INSERT INTO Loan (borrowedAt, returnAt, userId, bookId) VALUES (?,?,?,?)'
                       , (_borrowedAt, _returnAt, user['data'][0] , book['data'][0] ));
        connection.commit();
        
        return { 'status' : 201 , 'message' : 'Book Loaned'};

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };


def select(_email:str):
    try:
        # Encontrar o usuário a partir do email
        userByEmail = User.findByEmail(_email);

        if ( userByEmail['status'] != 200 ):
            return userByEmail;

        # Listar locações a partir do ID do usuário
        cursor.execute('SELECT * FROM Loan WHERE userId = ?', (userByEmail['data'][0] ,));
        loans = cursor.fetchall();
    
        return { 'status' : 200 , 'message' : 'Select Loans', 'data' : loans };

    except:    
        return { 'status' : 500 , 'message' : 'Something went wrong' };



def findByIsbn(_isbn:str):
    try:
        bookByIsbn = Book.findByIsbn(_isbn);

        if ( bookByIsbn['status'] != 200 ):
            return bookByIsbn;

        cursor.execute('SELECT * FROM Loan WHERE bookId = ?', (bookByIsbn['data'][0],));
        loan = cursor.fetchone();
    
        if ( loan == None ):
            return { 'status' : 404, 'message' : 'Book Available' };
        else:
            return { 'status' : 200 , 'message' : 'Found' , 'data' : loan }

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

def update():
    pass;

def delete(_isbn:str):
    try:
        # Encontrar a Locação
        loanByIsbn = findByIsbn(_isbn);
    
        if ( loanByIsbn['status'] != 200 ): # Não encontrou a locação
            return loanByIsbn;

        # Locação encontrada, prosseguir com o Delete
        cursor.execute('DELETE FROM Loan WHERE id = ?', (loanByIsbn['data'][0],));
        connection.commit();

        return { 'status' : 201 , 'message' : 'Loan deleted' };

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };