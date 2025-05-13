#!/usr/bin/env python3

def prints_all_except_3_6():
    """Prints all of the numbers from 0 to 6 except 3 and 6.
    Returns:
        NOTHING.
    """
    for number in range(0, 7):
        if (number in [3, 6]):
            continue
        elif (number + 1 == 6):
            last_number = number
            continue
        print(number, end=", ")
    print(last_number)

if __name__ == "__main__":
    prints_all_except_3_6();
