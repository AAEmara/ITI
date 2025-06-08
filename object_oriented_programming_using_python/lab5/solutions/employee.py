#!/usr/bin/env python3

"""A moudle that defines Employee Class.
"""

import psycopg2

# Connecting to the default postgres database
conn = psycopg2.connect("""
    dbname=postgres
    user=postgres
    password=hello_kitty_123
    """)
cur = conn.cursor()  # Opening a cursor to perform database operations

# Ensure the database exists (avoiding redundant creation)
conn.autocommit = True
cur.execute("SELECT 1 FROM pg_database WHERE datname='lab5'")
if cur.fetchone() is None:
    cur.execute("CREATE DATABASE lab5")
conn.autocommit = False
conn.close()

emp_table_stmt = """
    CREATE TABLE IF NOT EXISTS employee
    (id SERIAL PRIMARY KEY,
     first_name VARCHAR(32),
     last_name VARCHAR(32),
     age INT2,
     department VARCHAR(64),
     salary MONEY);
    """

# Reconnecting to the new database
conn = psycopg2.connect("dbname=lab5 user=postgres password=hello_kitty_123")
cur = conn.cursor()

# Create employee table within lab5 database
cur.execute(emp_table_stmt)
conn.commit()


class Employee:
    employees = list()

    def __init__(self, first_name, last_name, age, department, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.department = department
        self.salary = salary

        Employee.employees.append(self)

        insert_emp_stmt = """
            INSERT INTO employee (
                first_name, last_name, age, department, salary)
            VALUES (%s, %s, %s, %s, %s)
            """
        cur.execute(insert_emp_stmt,
                    (self.first_name,
                     self.last_name,
                     self.age,
                     self.department,
                     self.salary))
        conn.commit()

    def transfer(self, department):
        self.department = department
        fname = self.first_name
        lname = self.last_name
        cur.execute(f"""
            UPDATE employee
            SET department='{department}'
            WHERE first_name='{fname}'
                  AND last_name='{lname}'
            """)
        conn.commit()

    def fire(self):
        # remove the employee from the shared list
        # delete this record from the database
        fname = self.first_name
        lname = self.last_name

        Employee.employees.remove(self)

        cur.execute(f"""
            DELETE FROM employee
            WHERE first_name='{fname}'
                  AND last_name='{lname}'
            """)
        conn.commit()

    def show(self):
        # prints all employee data
        emp_data = {
            "first_name": self.first_name,
            "last_name": self.last_name,
            "age": self.age,
            "department": self.department,
            "salary": self.salary
            }
        print(emp_data)

    @staticmethod
    def list_employees():
        # selects all employees and print their data
        cur.execute("SELECT * FROM employee;")
        employees_retrieved = cur.fetchall()
        for emp in employees_retrieved:
            if emp is not None:
                print(emp)
