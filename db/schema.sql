### Schema

CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	user_id int NOT NULL,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);
