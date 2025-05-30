#!/usr/bin/env python3

"""A module that checks if a Bus Class instance is an instance of the
Vehicle class.
"""


class Vehicle:
    def __init__(self, name, mileage, capacity):
        self.name = name
        self.mileage = mileage
        self.capacity = capacity


class Bus(Vehicle):
    pass


if __name__ == "__main__":
    school_bus = Bus("School Volvo", 12, 50)
    print(
        "Is school_bus an instance of Vehicle?\nAnswer:",
        isinstance(school_bus, Vehicle))
