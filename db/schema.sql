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
	color_chosen varchar(255) NOT NULL, 
	color_landed varchar(255) NOT NULL, 
	bet_amount int NOT NULL, 
	balance_up int NOT NULL,
	balance_down int NOT NULL
);
