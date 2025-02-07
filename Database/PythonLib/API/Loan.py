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

        # Verificações feitas, agora a locação pode ser criada
        cursor.execute('INSERT INTO Loan (borrowedAt, returnAt, userId, bookId) VALUES (?,?,?,?)'
                       , (_borrowedAt, _returnAt, user['data'][0] , book['data'][0] ));
        
        return { 'status' : 201 , 'message' : 'Book Loaned'};

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

def select():
    pass;

def find():
    pass;

def update():
    pass;

def delete():
    pass;