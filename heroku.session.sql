-- criando a base de dados

-- CREATE TABLE noticias(
--     id_noticia SERIAL PRIMARY KEY,
--     titulo VARCHAR(100) NOT NULL,
--     conteudo text NOT NULL,
--     data_criacao TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'utc+3')
-- )

-- inserindo uma ntocia na nossa tabela

-- INSERT INTO noticias(
--     titulo, 
--     conteudo
--     ) VALUES (
--         'Noticia social', 
--         ' A Keury vai fazer um churrasco e vai os colegas e o professor, eba!'
--     )

-- Selecionar dados

-- SELECT * FROM noticias;

-- filtrar colunas
-- SELECT titulo, data_criacao FROM noticias;

-- filtrar com base no valor de coluna

-- SELECT * FROM noticias WHERE id_noticia = 2;

-- ordenar os registros selecionados

-- SELECT * FROM noticias ORDER BY id_noticia DESC;

-- SELECT * FROM noticias ORDER BY id_noticia ASC;

-- Atualizar um registro

-- UPDATE noticias SET titulo = 'Noticia animal' WHERE id_noticia = 1;

-- SELECT * FROM noticias;

-- UPDATE noticias SET conteudo = 'PostGre SQL é bem simples' WHERE id_noticia = 1;

-- SELECT * FROM noticias;

-- DELETE FROM noticias WHERE id_noticia = 1;

-- SELECT * FROM noticias;

-- INSERT INTO noticias(
--     titulo, 
--     conteudo
--     ) VALUES (
--         'Noticia de última hora', 
--         ' Esta turma de Desenvolvedores FullStack vão ficar montados na grana'
--     )

-- SELECT * FROM noticias;