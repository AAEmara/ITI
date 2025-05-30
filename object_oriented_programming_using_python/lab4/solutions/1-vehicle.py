#!/usr/bin/env python3

"""A module that defines a Vehicle class with default color attribute.
"""


class Vehicle:
    def __init__(self, name, max_speed, mileage, color="white"):
        self.name = name
        self.max_speed = max_speed
        self.mileage = mileage
        self.color = color


class Bus(Vehicle):
    pass


class Car(Vehicle):
    pass


if __name__ == "__main__":
    car = Car("BMW", 100, 50000)
    print("Car's name:", car.name)
    print("Car's max_speed:", car.max_speed)
    print("Car's mileage:", car.mileage)
    print("Car's color:", car.color)
