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


CREATE TABLE Pedido (
    id INTEGER PRIMARY KEY,
    data_pedido DATE NOT NULL,
    total REAL NOT NULL,
    vendedor TEXT,
    codigo TEXT NOT NULL UNIQUE,

    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id),
    FOREIGN KEY (id_produto) REFERENCES Produto(id)
);


INSERT INTO Pedido (data_pedido, total, vendedor, codigo, id_cliente, id_produto)
VALUES ('2025-01-04', 900, 'Douglas', '99999999', 10000, 2); 