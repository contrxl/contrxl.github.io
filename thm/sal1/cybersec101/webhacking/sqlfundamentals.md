---
title: SQL Fundamentals
layout: notes
---

# Databases 101

There are two primary types of database: relational (SQL) and non-relational (NoSQL):

- Relational databases store structured data, meaning data inserted follows a structure. For example, user data contains first_name, last_name and email_address. Whenever a new user joins, their data is entered into this structure. Relationships can be made between two or more tables, for example, user and order_history.
- Non-relational databases store data in a non-tabular format. For example, documents being scanned may contain various types/quantities of data and so are stored in a non-tabular database.

# Tables, Rows & Columns

In a relational database, all data is stored in a table. Each table has rows and columns. Columns consist of the information needed to define a record, records are then inserted into rows with the relevant information filled in the columns. When columns are defined, a data type must be chosen, if a record is inserted into a database where the data type does not match, it is rejected. Standard data types are Strings, Integers, floats/decimals and times/dates.

# Primary and Foreign Keys

- Primary Key: used to ensure data in a certain column is unique. There needs to be a way to identify each record in a table, a value unique and not repeated by any other record. A column must be chosen in each table as a primary key. There can only be one primary key column in a table.
- Foreign Key: column/columns in a table that exist in another table within the database, therefore providing a link between two tables. Foreign keys allow the relationships between different tables. There can be more than one foreign key column in a table.

# Benefits of SQL and Relational Databases

- Fast: relational databases can return massive amounts of data almost instantaneously
- Easy to learn: SQL is plain English, making it easy to pick up
- Reliable
- Flexible

# Database and Table Statements

To create a new database:

```sql
CREATE DATABASE database_name;
```

<br/>See all databases with:

```sql
SHOW DATABASES;
```

<br/>To choose a database to interact with:

```sql
USE database_name;
```

To remove a database:

```sql
DROP DATABASE database_name;
```

<br/>In an active database (one you used use on), to create a table:

```sql
CREATE TABLE table_name (
	column1 data_type,
	column2 data_type,
	column3 data_type
);
```

<br/>An example table could look like:

```sql
CREATE TABLE book_inventory (
book_id INT AUTO_INCREMENT PRIMARY KEY,
book_name VARCHAR(255) NOT NULL,
publication_date DATE
);
```

<br/>This creates three columns:

- book_id: an integer which autoincrements (the first will have ID 1, the second ID 2 and so on), and is the primary key, meaning it will uniquely identify a book.
- book_name: variable characters (text/numbers/punctuation) with a max length of 255 characters and cannot be empty.
- publication_date: a date.
    
<br/>To see all tables in a database:

```sql
SHOW TABLES;
```

<br/>To see columns and rows within a chosen table:

```sql
DESCRIBE table_name;
```

<br/>An existing table can be modified using ALTER, for example, to add page_count as a column to our previous example:

```sql
ALTER TABLE book_inventory
ADD page_count INT;
```

<br/>To delete a table:

```sql
DROP TABLE table_name;
```

# CRUD Operations

CRUD is: Create, Read, Update and Delete which are the basic operations in any DBMS.

## Create

This inserts new records into a table, to do this:

```sql
INSERT INTO table_name (column1, column2, column3, column4)
VALUES (value1, value2, value3, value4)
```

## Read

Used to read or retrieve info from a table, to fetch all columns from a table:

```sql
SELECT * FROM table_name;
```

<br/>Specific columns can also be specified with:

```sql
SELECT column1, column3 FROM table_name;
```

## Update

Modifies an existing record in a table:

```sql
UPDATE table_name
SET column2=value2 WHERE column1=value1;
```

## Delete

Removes records from a table:

```sql
DELETE FROM table_name WHERE column1=value1;
```
# Clauses

Clauses are parts of a statement which specify the criteria of the data being manipulated.

## Distinct Clause

Used to avoid duplicate records in a query, returning only unique values:

```sql
SELECT DISTINCT column1 FROM table_name;
```

## Group By Clause

Aggregates data from multiple records and groups the results in columns, for example:

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;
```

## Order By Clause

Used to sort records in ascending (ASC) or descending (DESC) order. For example:

```sql
SELECT * FROM table_name
ORDER BY column1 ASC;
```

## Having Clause

Used with other clauses to filter groups or results based on condition. For example:

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1
HAVING column1 LIKE '%query%';
```

# Operators
## Like Operator

Used with clauses like WHERE to filter specific patterns in a column, for example:

```sql
SELECT * FROM table_name WHERE column1 LIKE "%query%";
```

## And Operator

Uses multiple conditions and returns true if they are all true, for example:

```sql
SELECT * FROM table_name WHERE column1="value" AND column2="value";
```

## Or Operator

Combines multiple conditions and returns true if at least one is true, for example:

```sql
SELECT * FROM table_name WHERE column1 LIKE "%query%" OR column1 LIKE "%query2%";
```

## Not Operator

Reverses the value of a boolean operator, allowing conditions to be excluded, for example:

```sql
SELECT * FROM table_name WHERE NOT column1 LIKE "%query%";
```

## Between Operator

Test if a value exists in a defined range, for example:

```sql
SELECT * FROM table_name WHERE column1 BETWEEN value1 AND value2;
```

## Equal To Operator

Compares two expressions and determines if they are equal, for example:

```sql
SELECT * FROM table_name WHERE column1="query";
```

## Not Equal To Operator

Compares two expressions and checks if they are not equal, for example:

```sql
SELECT * FROM table_name WHERE column1!="query";
```

## Less Than Operator

Compares two expressions to see if a given value is less than a provided one, for example:

```sql
SELECT * FROM table_name WHERE column1 < value1;
```

## Greater Than Operator

Compares two expressions to see if a given value is greater than a provided one, for example:

```sql
SELECT * FROM table_name WHERE column1 > value1;
```

The above expressions can also use `>=` or `<=` for greater than or equal to and less than or equal to respectively.

# Functions
## Concat() Function

Used to add two or more strings into a single column, for example:

```sql
SELECT CONCAT(column1, " is like ", column2) AS new_column_heading FROM table_name;
```

## Group_Concat() Function

Helps concatenate data from multiple rows into one field, for example:

```sql
SELECT column1, GROUP_CONCAT(column2 SEPARATOR ", ") AS new_column_heading
FROM table_name
GROUP BY column1;
```

## Substring() Function

Retrieve substring from string within a query, for example:

```sql
SELECT SUBSTRING(column1, value1, value2) AS new_column_heading FROM table_name;
```

## Length() Function

Returns number of characters in a string, for example:

```sql
SELECT LENGTH(column1) AS new_column_heading FROM table_name;
```

## Count() Function

Returns number of records within an expression, for example:

```sql
SELECT COUNT(*) AS new_column_heading FROM table_name;
```

## Sum() Function

Sums all values (not null) of a determined column, for example:

```sql
SELECT SUM(column1) AS new_column_heading FROM table_name;
```

## Max() and Min() Functions

Calculates maximum or minimum respectively within a provided column, for example:

```sql
SELECT MAX(column1) AS new_column_heading FROM table_name;
```