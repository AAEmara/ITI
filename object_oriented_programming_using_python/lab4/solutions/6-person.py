#!/usr/bin/env python3

"""A module that defines a Person Class and two Child Classes (Male, and 
Female).
"""


class Person:
    def getGender(self):
        pass

class Male(Person):
    def getGender(self):
        print("Male")

class Female(Person):
    def getGender(self):
        print("Female")


if __name__ == "__main__":
    male = Male()
    female = Female()
    male.getGender()
    female.getGender()
