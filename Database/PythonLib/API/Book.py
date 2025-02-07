import sqlite3;

connection = sqlite3.connect('LibDatabase.db');
cursor = connection.cursor();

# Criação da tabela

cursor.execute(
'''
CREATE TABLE IF NOT EXISTS Book(
    id INTEGER PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    releaseDate DATE NOT NULL,
    isbn VARCHAR(64) NOT NULL UNIQUE,
    authorName VARCHAR(128) NOT NULL,
    genre VARCHAR(32) NOT NULL
);
'''
);


# Create
def create(_title:str , _releaseDate:str , _isbn:str , _author:str , _genre:str):
    try:
        cursor.execute('INSERT INTO Book(title, releaseDate, isbn, authorName, genre) VALUES (?, ?, ?, ?, ?)', (_title, _releaseDate, _isbn, _author, _genre) );
        connection.commit();
        return { 'status' : 201 , 'message' : 'Book created' };

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

# Return all
def select():
    try:
        cursor.execute('SELECT * FROM Book');
        books = cursor.fetchall();
        return { 'status' : 200 , 'message' : 'Select Books' , 'data' : books }

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

# Return
def findByIsbn(_isbn:str):
    try:
        cursor.execute('SELECT * FROM Book WHERE isbn = ?', (_isbn,) );
        book = cursor.fetchone();

        if ( book == None ):
            return { 'status' : 404, 'message' : 'Book not found' };
        else:
            return { 'status' : 200 , 'message' : 'Book found' , 'data' : book }

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };


# Update
def update(_field:str, _isbn:str, _newValue:str):
    try:
        fields = ['title', 'releaseDate', 'isbn', 'authorName', 'genre'];
        if ( _field not in fields ):
            return { 'status' : 400, 'message' : 'Invalid field' };

        book = findByIsbn(_isbn);
    
        if ( book['status'] != 200 ):
            return book;
        else:
            cursor.execute(f"UPDATE Book SET {_field} = ? WHERE id = ? ", (_newValue , book['data'][0]) );
            connection.commit();
    
            return { 'status' : 200, 'message' : 'Book updated' };
    
    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };


# Delete
def delete(_isbn:str):
    try:
        book = findByIsbn(_isbn);
    
        if ( book['status'] != 200 ):
            return book;
        else:
            cursor.execute('DELETE FROM Book WHERE id = ?', (book['data'][0],));
            connection.commit();

            return { 'status' : 210 , 'message' : 'Book deleted' };

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

