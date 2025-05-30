#!/usr/bin/env python3

"""A module that defines a Vehicle, Bus Class. Where Bus Class inherits the
Vehicle class and the fare method is overriden in the Bus Class.
"""


class Vehicle:
    def __init__(self, name, mileage, capacity):
        self.name = name
        self.mileage = mileage
        self.capacity = capacity

    def fare(self):
        return capacity * 100


class Bus(Vehicle):
    def __init__(self, name, mileage, capacity):
        super().__init__(name, mileage, capacity)

    def fare(self):
        return self.capacity * 100 * 1.1


if __name__ == "__main__":
    school_bus = Bus("School Volvo", 12, 50)
    print("Total Bus fare is:", school_bus.fare())
