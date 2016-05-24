### Schema
CREATE TABLE users_bitcoin
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	PRIMARY KEY (id), 
	balance  int DEFAULT 500, 
	created_at DATETIME NOT NULL, 
	updated_at DATETIME NOT NULL
);
