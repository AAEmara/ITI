#!/usr/bin/env python3

from math import pi


def volume_of_sphere(radius: int) -> float:
    """Calculates the volume of a sphere based on the given radius
    Returns:
        The calculated sphere's volume.
    """
    sphere_volume = (4 / 3) * pi * radius ** 3;
    return (sphere_volume)


if __name__ == "__main__":
    print("Welcome, Let's calcualte the your sphere's volume!")
    radius = int(input("Please enter the sphere's radius: "))
    volume = round(volume_of_sphere(radius), 2)
    print(f"Sphere's Volume is: {volume}")
