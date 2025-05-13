#!/usr/bin/env python3

def count_digits_letters(string: str) -> dict:
    """Counts the number of digits and letters for the characters of a string
    Returns:
        A dictionary with the count of digits and letters.
    """
    digits_count = 0
    letters_count = 0
    for char in string:
        if char.isdigit():
            digits_count += 1
        elif char.isalpha():
            letters_count += 1
    return ({"digits_count": digits_count, "letters_count": letters_count})


if __name__ == "__main__":
    string: str = input("Please enter a string combo of letters and digits: ")
    count_dict = count_digits_letters(string)
    print(
        f"Digits Count: {count_dict['digits_count']}\n"
        f"Letters Count: {count_dict['letters_count']}\n",
    )
