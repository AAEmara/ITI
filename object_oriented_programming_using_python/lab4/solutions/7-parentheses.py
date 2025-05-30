#!/usr/bin/env python3

"""A module that defines Parentheses Class, that validates validity of a 
string.
"""


class ParenthesesValidator:
    def validate_parentheses(self, string):
        parentheses_dict = { '(': ')', '{': '}', '[': ']'}
        string_len = len(string)

        if string_len % 2 != 0:
            return False

        for i in range(0, string_len - 1, 2):
            j = i + 1
            current_char = string[i]
            if parentheses_dict[current_char] != string[j]:
                return False
        return True


if __name__ == "__main__":
    validator = ParenthesesValidator()
    string_1 = "()"
    print(f"{string_1} validation: {validator.validate_parentheses(string_1)}")
    string_2 = "()[]{}"
    print(f"{string_2} validation: {validator.validate_parentheses(string_2)}")
    string_3 = "[)"
    print(f"{string_3} validation: {validator.validate_parentheses(string_3)}")
    string_4 = "({[)]"
    print(f"{string_4} validation: {validator.validate_parentheses(string_4)}")
    string_5 = "{{{"
    print(f"{string_5} validation: {validator.validate_parentheses(string_5)}")

