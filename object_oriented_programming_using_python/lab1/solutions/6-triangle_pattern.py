#!/usr/bin/env python3

def triangle_pattern(height: int):
    """Constructs the triangle's pattern and prints it.
    """
    for times_top in range(1, height + 1):
        print("*"*times_top)
    for times_bottom in range(height - 1, 0, -1):
        print("*"*times_bottom)

if __name__ == "__main__":
    height: int = int(input("Please enter the triangle's height: "))
    triangle_pattern(height)
