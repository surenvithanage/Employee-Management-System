-- to create a new database
CREATE DATABASE nodejsmysql;

-- to use database
use nodejsmysql;

-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  nic VARCHAR(50),
  address VARCHAR(50),
  email VARCHAR(50),
  phonenumber VARCHAR(100),
  salary VARCHAR(50),
  employeetype VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(50),
);

-- to show all tables
show tables;

-- to describe table
describe customer;


