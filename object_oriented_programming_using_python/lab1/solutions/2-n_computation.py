#!/usr/bin/env python3

def n_computation(number: str) -> int:
    """Concatenates the number given (once + twice + three times).
    Returns:
        The sum of the concatenated strings as an integer value.
    """
    result: int = int(number) + int(number * 2) + int(number * 3)
    return result


if __name__ == "__main__":
    number: str = input("Please enter a number: ")
    result = n_computation(number)
    print(f"The result of {number} + {number*2} + {number*3} is: {result}")
