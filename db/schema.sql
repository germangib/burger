DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

create table burgers_tbl (
	item_id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(45) NULL, 
    devoured boolean NULL,
    PRIMARY KEY (item_id)
); 