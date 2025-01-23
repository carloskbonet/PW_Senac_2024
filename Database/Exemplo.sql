CREATE TABLE Book (
	id INTEGER PRIMARY KEY,
  	name TEXT NOT NULL,
  	autor TEXT NOT NULL,
  	releaseDate DATE,
  	isbn INT NOT NULL UNIQUE
);

-- Criação de uma linha na tabela
-- C (CRUD)

INSERT INTO Book (name, autor, releaseDate, isbn) VALUES ('Um dia sem reclamar', 'Davi Lago', '2021-01-15',6587885047);
INSERT INTO Book (name, autor, releaseDate, isbn) VALUES ('O último rei dragão', 'Leia Stone', '2022-05-19',43154312);
INSERT INTO Book (name, autor, releaseDate, isbn) VALUES ('Chama de ferro', 'Rebbeca Yarros', '2021-12-11',123761717);
INSERT INTO Book (name, autor, releaseDate, isbn) VALUES ('Narnia', 'C.S. Lewis', '2008-07-01',865453254);
INSERT INTO Book (name, autor, releaseDate, isbn) VALUES ('O despertar da lua caída', 'Sarah Parker', '2024-04-22',54565436543);
INSERT INTO Book (name, autor, releaseDate, isbn) VALUES ('Verify', 'Colleen Hoover', '2025-01-23',1443765435);

-- Leitura de uma linha da tabela
-- R (CRUD)
-- Recupera todos os livros com todos os campos
SELECT * FROM Book;
-- Recupera todos os livros com campos específicos
SELECT name, autor, isbn FROM Book;

-- Consultas específicas        //      >  =  !=  <  >=   <=
SELECT * FROM Book WHERE name = 'Narnia';
SELECT * FROM Book WHERE id > 4;
SELECT * FROM Book WHERE autor != 'Leia Stone';
SELECT * FROM Book WHERE releaseDate > '2022-01-01';

-- Não será necessário utilizar 
-- SELECT * FROM Book WHERE releaseDate > '2022-01-01' and autor != 'Colleen Hoover' or autor = 'Leia Stone';