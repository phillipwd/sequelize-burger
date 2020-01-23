DROP DATABASE IF EXISTS burgerseq_db;

CREATE DATABASE burgerseq_db;

USE burgerseq_db;
SET SQL_MODE = ' ';
CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255),
    devour BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);