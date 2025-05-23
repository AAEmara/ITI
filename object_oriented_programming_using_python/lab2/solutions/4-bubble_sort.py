#!/usr/bin/env python3

"""A module that contains a bubble sort algorithm to sort unordered elements.
"""


def bubble_sort(unordered_list: list) -> list:
    """Sorts an unordered list according to bubble sort algorithm.

    Args:
        unordered_list: A list to be sorted by the function.

    Returns:
        An ordered list.
    """
    ordered_list: list = unordered_list[:]
    list_len: int = len(ordered_list)
    loop_count: int = 0
    i: int = 0
    j: int = i + 1

    while (loop_count != list_len):
        if (ordered_list[i] > ordered_list[j]):
            tmp_value = ordered_list[i]
            ordered_list[i] = ordered_list[j]
            ordered_list[j] = tmp_value

        i += 1
        j = i + 1

        if (j == list_len):
            loop_count += 1
            i = 0
            j = i + 1

    return (ordered_list)


if __name__ == "__main__":
    unordered_list = [1, 7, 3, 2, 4, 8]
    ordered_list = bubble_sort(unordered_list)

    print(f"Unordered List: {unordered_list}")
    print(f"Ordered List: {ordered_list}")
