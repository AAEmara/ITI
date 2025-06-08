#!/usr/bin/env python3

"""A module that defines a Manager Class.
"""


from employee import Employee


class Manager(Employee):
    def __init__(self, first_name,
                 last_name, age, department,
                 salary, managed_department):
        super().__init__(first_name, last_name, age, department, salary)
        self.managed_department = managed_department

    def show(self):
        emp_data = {
            "first_name": self.first_name,
            "last_name": self.last_name,
            "age": self.age,
            "department": self.department,
            "salary": "confidential",
            "managed_department": self.managed_department}
        print(emp_data)
