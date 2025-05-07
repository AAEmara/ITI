# Introduction to PostgreSQL Database

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)
  - [Exercise 3](#exercise-3)
  - [Exercise 4](#exercise-4)
  - [Exercise 5](#exercise-5)
  - [Exercise 6](#exercise-6)
  - [Exercise 7](#exercise-7)
  - [Exercise 8](#exercise-8)
  - [Exercise 9](#exercise-9)

## Installation
  1. Using Ubuntu 22.04: update your machine, and install postgresql.
  ```bash
  sudo apt update
  sudo apt install postgresql -y
  ```

  2. Start PostgreSQL
  ```bash
  sudo service postgresql start
  sudo service postgresql status
  ```

## Usage
  1. Switch your current user to PostgreSQL user.
  ```bash
  sudo -i -u postgres
  ```
  - This should result in the following output:
  ```bash
  postgres@your-machine:~$
  ```

  2. Run psql
  ```bash
  postgres@your-machine:~$ psql
  ```

  3. Create the pagila database
  ```bash
  psql=# CREATE DATABASE pagila;
  ```

  4. Exit psql, by writing `\q` and striking the `Enter` or `Return` button.
  ```bash
  psql=# \q
  ```
  5. Import the Pagila Schema
  ```bash
  postgres@your-machine:~$ psql -d pagila -f pagila-schema.sql
  ```

  6. Import the Pgila Data
  ```bash
  postgres@your-machine:~$ psql -d pagila -f pagila-insert-data.sql
  ```

  7. Verify the import
  ```bash
  postgres@your-machine:~$ psql -d pagila
  ```

  8. Check the tables
  ```bash
  psql=# \dt
  ```

  9. Check the data was loaded
  ```bash
  psql=# SELECT COUNT(*) FROM film;
  ```

  10. From a new terminal, write your SQL Queries in a file and copy them to 
  the `/tmp` dir .
  ```bash
  user@your-machine:~/sql-dir$ cp *.sql /tmp
  ```

  11. Return to the older terminal and exit
  ```bash
  psql=# \q
  ```

  12. Run one of your SQL Query files
  ```bash
  postgres@your-machine:~$ psql -d pagila -f /tmp/your-sql-query-file.sql
  ```

  13. **The result will appear afterward!**

## Exercise 1
  1. List all rentals with customer names.

  - [Problem 1 SQL Query Solution File](./1-customer_rentals.sql)

## Exercise 2
  2. Show all films available in inventory with their titles.

  - [Problem 2 SQL Query Solution File](./2-films_titles_in_inventory.sql)

## Exercise 3
  3. Display all actors with the films they appeared in.

  - [Problem 3 SQL Query Solution File](./3-display_actors_with_films.sql)

## Exercise 4
  4. Show customer names with their addresses.

  - [Problem 4 SQL Query Solution File](./4-customer_name_addresses.sql)

## Exercise 5
  5. Find customers who have never rented a film.

  - [Problem 5 SQL Query Solution File](./5-customer_never_rented.sql)

## Exercise 6
  6. Find actors who appear in more than 10 films.

  - [Problem 6 SQL Query Solution File](./6-actors_more_than_10_films.sql)

## Exercise 7
  7. Find all films with a rental rate higher than the average rental rate.

  - [Problem 7 SQL Query Solution File](./7-higher_than_average_rental.sql)

## Exercise 8
  8. Cound how many films are in each rating category.

  - [Problem 8 SQL Query Solution File](./8-films_count.sql)

## Exercise 9
  9. List customers who made at least 10 rentals.

  - [Problem 2 SQL Query Solution File](./9-customers_with_10_rentals_or_more.sql)
