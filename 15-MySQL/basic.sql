CREATE DATABASE IF NOT EXISTS CollegeDB;
USE CollegeDB;
SELECT DATABASE();

CREATE TABLE IF NOT EXISTS Students(
   StudentID INT auto_increment primary KEY,
   Name VARCHAR(100),
   Age tinyint,
   EMAIL varchar(100),
   JoinDate DATE
);

SELECT * FROM Students;

INSERT INTO Students(Name, Age, Email, JoinDate)
VALUES
('Amit Gupta', 22, 'amint@gmail.com', '2025-02-20'),
('hello Gupta', 22, 'amint@gmail.com', '2025-01-20')
;

ALTER TABLE Students ADD COLUMN City VARCHAR(50);
ALTER TABLE Students MODIFY Age SMALLINT;
ALTER TABLE Students RENAME COLUMN EMAIL TO STUDENTEMAIL;

TRUNCATE TABLE Students;