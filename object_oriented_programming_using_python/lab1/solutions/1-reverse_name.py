#!/usr/bin/env python3

def reverse_name(first_name: str, last_name: str):
    """Reverses the order of the names given and prints them.
    Returns:
        NOTHING.
    """
    print(last_name, first_name)


if __name__ == "__main__":
    first_name = input("Please enter your first name: ")
    last_name = input("Please enter your last name: ")
    reverse_name(first_name, last_name)
