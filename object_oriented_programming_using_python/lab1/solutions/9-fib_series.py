#!/usr/bin/env python3

def fib(number: int):
    """Prints the Fibonacci Sequence up to 50.
    Returns:
        NOTHING.
    """
    first = 0
    second = 1
    print(f"{first}, {second}, ", end="")
    for i in range(2, number + 1):
        accumulator = first + second
        first = second
        second = accumulator
        if (first + second) > 50:
            break
        print(accumulator, end=", ")
    print(accumulator)

if __name__ == "__main__":
    print("Welcome to the Fibonacci Sequence!")
    number = int(input("Please, enter a positive number: "))
    fib(number)
