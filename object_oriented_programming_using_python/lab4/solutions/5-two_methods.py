#!/usr/bin/env python3

"""A module that defines a Class with two method.
"""


class Text:
    def getString(self):
        self.string = input()

    def printString(self):
        print(self.string.upper())


if __name__ == "__main__":
    text = Text()
    text.getString()
    text.printString()
