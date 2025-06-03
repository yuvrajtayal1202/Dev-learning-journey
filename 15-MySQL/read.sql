CREATE DATABASE IF NOT EXISTS shopDB;
USE shopDB;

CREATE TABLE IF NOT EXISTS customers (
    customerID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    address VARCHAR(200)
);

INSERT IGNORE INTO customers(name, email, address)
VALUES
('Amit', 'amit1@emaui.com', 'Delhi, India'),
('jaya', 'jaya@emaui.com', 'Delhi, India'),
('rekha', 'rekha@emaui.com', 'Banglore, India');


-- SELECT * FROM customers;
SELECT name FROM customers;
SELECT distinct address FROM customers;
