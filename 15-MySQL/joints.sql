-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS retailDB;
USE retailDB;

-- Create Customers table
CREATE TABLE IF NOT EXISTS Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100)
);

DROP TABLE IF EXISTS Orders;

-- Recreate the Orders table with AUTO_INCREMENT on OrderID
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    Product VARCHAR(100),
    Amount DECIMAL(10,2),
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert data into Customers table
INSERT INTO Customers (Name) VALUES
('Amit'),
('Jaya'),
('Rekha');

INSERT INTO Orders (Product, Amount, CustomerID) VALUES
('Laptop', 50000.00, 2),
('Mouse', 500.00, 1),
('Keyboard', 700.00, 1);


-- INNER JOIN: Only customers with orders

-- FULL OUTER JOIN equivalent using UNION of LEFT and RIGHT JOINs
(
    SELECT 
        Customers.CustomerID, 
        Customers.Name,
        Orders.Product, 
        Orders.Amount 
    FROM Customers   
    LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
)
UNION
(
    SELECT 
        Customers.CustomerID, 
        Customers.Name,
        Orders.Product, 
        Orders.Amount 
    FROM Customers   
    RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
);

