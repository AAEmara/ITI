#!/usr/bin/env python3

"""A module that defines functions that compares a sequence of numbers,
and returns if they are unique or not.
"""


def compare_sequence(sequence: list) -> bool:
    """Compares elements of a sequence returns if they are unique or not.
    Args:
        sequence1: parameter as list of numbers.

    Returns:
        True if unique,
        otherwise False.
    """
    unique_list = list()

    for i in range(len(sequence)):
        if sequence[i] in unique_list:
            return (False)
        unique_list.append(sequence[i])
    return (True)


if __name__ == "__main__":
    # Example1
    sequence = [1, 5, 7, 9]

    print(f"Sequence Values: {sequence}")
    print(compare_sequence(sequence))
    print()

    # Example2
    sequence = [2, 4, 5, 5, 7, 9]

    print(f"Sequence Values: {sequence}")
    print(compare_sequence(sequence))
