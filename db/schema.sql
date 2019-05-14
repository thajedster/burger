drop database if EXISTS burgers_db;
create database burgers_db;

use DATABASE burgers_db;

create table burgers
(
    id INT NOT NULL
    auto_increment,
    burger_name VARCHAR
    (50),
    devoured boolean,
    primary key
    (id)
);

