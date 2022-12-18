CREATE TABLE Products(id SERIAL PRIMARY KEY,
																							pname VARCHAR(255),
																							price INTEGER);


CREATE TABLE Order(id SERIAL PRIMARY KEY,
																				sum INTEGER, prod_id INTEGER,
																			FOREIGN KEY (prod_id) REFERENCES Products (id));

