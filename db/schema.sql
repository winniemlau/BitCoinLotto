### Schema

CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	balance int NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	user_id int NOT NULL,
	made_at timestamp NOT NULL,
	betAmount varchar(255) NOT NULL,
	colorChosen varchar(255) NOT NULL,
	colorLanded varcahr(255) NOT NULL,
	user_win BOOLEAN DEFAULT false,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);
