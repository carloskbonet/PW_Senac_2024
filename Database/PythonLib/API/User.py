import sqlite3;

connection = sqlite3.connect('LibDatabase.db');
cursor = connection.cursor();

# Criação da tabela

cursor.execute(
'''
CREATE TABLE IF NOT EXISTS User(
    id INTEGER PRIMARY KEY,
    email VARCHAR(128) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    name VARCHAR(128),
    cpf VARCHAR(32) NOT NULL UNIQUE
);
'''
);


# CRUD do Usuário

# Create user
def create(_email:str , _password:str, _name:str, _cpf:str):
    try:
        # Email e CPF únicos

        cursor.execute('INSERT INTO User(email, password, name, cpf) VALUES (?, ?, ?, ?)', (_email , _password , _name , _cpf) );
        connection.commit();
        return { 'status' : 201 , 'message' : 'User created' };

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

# Return all users
def select():
    try:
        cursor.execute('SELECT * FROM User');
        users = cursor.fetchall();
        return { 'status' : 200 , 'message' : 'Select Users' , 'data' : users }

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

# Return user
def findByEmail(_email:str):
    try:
        cursor.execute('SELECT * FROM User WHERE email = ?', (_email,) );
        user = cursor.fetchone();

        if ( user == None ):
            return { 'status' : 404, 'message' : 'User not found' };
        else:
            return { 'status' : 200 , 'message' : 'User found' , 'data' : user }

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };


# Update
def update(_field:str, _email:str, _newValue:str):
    try:
        # Verificar se o field é válido
        fields = ['email', 'password', 'name', 'cpf'];
        if ( _field not in fields ):
            return { 'status' : 400, 'message' : 'Invalid field' };

        # Encontrar o usuário a partir do email
        # Encontra o usuário
        user = findByEmail(_email);
    
        # Verificar o status da busca
        if ( user['status'] != 200 ):
            return user;
        else:
            # Deu certo, o usuário foi encontrado.

            cursor.execute(f"UPDATE User SET {_field} = ? WHERE id = ? ", (_newValue , user['data'][0]) );
            connection.commit();
    
            return { 'status' : 200, 'message' : 'User updated' };
    
    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };


# 1°- Encontrar o usuário pelo email
# 2°- Encontrar o ID caso o usuário exista no banco de dados
# 3°- Utilizar o ID para fazer o delete

def delete(_email:str):
    try:
        # Encontra o usuário
        user = findByEmail(_email);
    
        # Verificar o status da busca
        if ( user['status'] != 200 ):
            return user;
        else:
            # Deu certo, o usuário foi encontrado.
            # Agora é possível deletar.
            cursor.execute('DELETE FROM User WHERE id = ?', (user['data'][0],));
            connection.commit();

            return { 'status' : 210 , 'message' : 'User deleted' };

    except:
        return { 'status' : 500 , 'message' : 'Something went wrong' };

