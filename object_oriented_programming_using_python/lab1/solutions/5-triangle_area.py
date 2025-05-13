#!/usr/bin/env python3

def area_of_triangle(base: int, height: int) -> float:
    """Calculate the are of a triangle.
    """
    triangle_area = 0.5 * base * height
    return (triangle_area)


if __name__ == "__main__":
    base: int = int(input("Please enter the base of the triangle: "))
    height: int = int(input("Please enter the height of the triangle: "))
    triangle_area = area_of_triangle(base, height)
    print(f"The triangle's area is: {triangle_area}")
