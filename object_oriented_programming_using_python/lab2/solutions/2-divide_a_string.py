#!/usr/bin/env python3

"""This moudle includes functions that formats two given strings, and
returns them back to the user.
"""


def format_divided_strings(string1: str, string2: str) -> str:
    """Returns a formatted string of the two given strings given.
    Args:
        string1: The first string parameter to be divided.
        string2: The second string parameter to be divided.

    Returns:
        A string of the form:
            "(half1_front + half2_front) + (half1_back + half2_back)"
    """
    string1_halves: list = half_string(string1)
    string2_halves: list = half_string(string2)

    return (format_halves(string1_halves, string2_halves))


def half_string(string: str) -> list:
    """Halves a string into front and back halves.

        If the length of the string is odd, the extra character goes to the
        front,
        Otherwise they are divided into two equal lengths of characters.

    Args:
        string: The string to be halved into front and back halves.

    Returns:
        A list of two halves, where:
            - halves[0] is the front half.
            - halves[1] is the back half.
    """
    halves = list()
    string_len = len(string)

    if not (string_len % 2):
        halves.append(string[0: string_len//2])
        halves.append(string[string_len//2:])
    else:
        halves.append(string[0: (string_len//2 + 1)])
        halves.append(string[(string_len//2) + 1:])
    return (halves)


def format_halves(half1: list, half2: list) -> str:
    """Returns a formatted string based on the front and back halves of inputs.

    Args:
        half1: The first list of two indexes that represents the two halves.
        half2: The first list of two indexes that represents the two halves.

    Returns:
        A formatted output of the halves represented as following:
            "(half1_front + half2_front) + (half1_back + half2_back)"
    """
    return f"({half1[0]} + {half2[0]}) + ({half1[1]} + {half2[1]})"


if __name__ == "__main__":
    string1 = 'abcde'
    string2 = '123456'
    string = format_divided_strings(string1, string2)
    print(string)
