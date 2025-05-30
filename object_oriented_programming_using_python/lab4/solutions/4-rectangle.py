#!/usr/bin/env python3

"""A module that defines a Rectangle Class.
"""


class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width


if __name__ == "__main__":
    rectangle = Rectangle(5, 10)
    print(
        f"Rectangle\'s area with length of {rectangle.length} "
        f"and width of {rectangle.width} is: {rectangle.area()}")
