CREATE TABLE Produto (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    quantidade INT NOT NULL
);


INSERT INTO Produto (nome, preco, quantidade) VALUES ('Banana', 0.50, 100),('Abacate', 2.50, 58),
('Maça', 0.40, 49),('Tomate', 2, 5);



CREATE TABLE Cliente (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT
);

INSERT INTO Cliente (nome) VALUES ('Mariana'), ('José'), ('Wagner');