#!/usr/bin/env python3


"""The entry point for working with Manager/Employee Classes in PostgreSQL
database.
"""

from employee import Employee
from manager import Manager


if __name__ == "__main__":
    status = True
    while (status):
        class_type = input("""
 Welcome to the Employee/Manager Operations CLI!
=================================================
 Before doing any operations, are the operations for an Employee or a Manager?
 -----------------------------------------------------------------------------
 Enter "e" for an Employee and "m" for a Manager!
 >_ """)

        if class_type == "m":
            class_mask = Manager
            tone = "Manager"
        elif class_type == "e":
            class_mask = Employee
            tone = "Employee"
        else:
            print("Unknown Input!")
            continue

        operation = input(f"""
 Please choose an operation from the following list:
 ---------------------------------------------------
  "Add": Adds a new {tone.lower()}.
  "Fire": Fires an existing {tone.lower()} from his position.
  "Show": Shows details of an existing {tone.lower()}.
  "Transfer": Changes the current department of an {tone.lower()}.
  "Q/q": Quit from the CLI!

  Which operation would you like me to execute?\n
  >_ """).lower()
        if (operation == "add"):
            fname = str(input(f"""
 Let's create a new {tone.lower()}!
 ----------------------------
  {tone}'s First Name?
  >_ """)).lower()

            lname = str(input(f"""
 Let's create a new {tone.lower()}!
 ----------------------------
  {tone}'s Last Name?
  >_ """)).lower()

            age = int(input(f"""
  {tone}'s Age?
  >_ """))

            department = str(input(f"""
  {tone}'s Department?
  >_ """)).lower()

            salary = int(input(f"""
  {tone}'s Salary?
  >_ """))

            if (class_type == "m"):
                managed_department = str(input(f"""
  {tone}'s Department?
  >_ """)).lower()
                instance = class_mask(fname,
                        lname,
                        age,
                        department,
                        salary,
                        managed_department)
            elif (class_type == "e"):
                instance = class_mask(fname,
                            lname,
                            age,
                            department,
                            salary)
        elif (operation == "fire"):
            instance.fire()
            print(f"Fired the {tone.lower()} successfully!")
        elif (operation == "show"):
            print(f"""
 Find following data about the {tone.lower()}:
 ---------------------------------------------
""")
            instance.show()
        elif (operation == "transfer"):
            department = str(input(f"""
 Transfer the {tone.lower()}'s to the desired department:
 -------------------------------------------------------
 What's the {tone}'s Department to Manage?
 >_ """)).lower()
            instance.transfer(department)

        elif (operation == 'q'):
            status = False
