#!/usr/bin/env python3

import copy


def unqiue_elements(original_list: list) -> list:
    """Takes a list and return a new one with its unique elements.
    Args:
        original_list: The original list to retrieve manipulate.

    Returns:
        A new list with unqiue elements.
    """
    new_list: list = list(set(copy.deepcopy(original_list)))
    return (new_list)


if __name__ == "__main__":
    test_list = [1, 2, 2, 3, 3, 4, 5, 3, 2, 5]
    new_list = unqiue_elements(test_list)
    print(new_list)
