#!/usr/bin/env python3

def reverse_word(word: str) -> str:
    """Reverses a given word.
    Returns:
        The reversed word.
    """
    print(word[::-1])


if __name__ == "__main__":
    word: str = input("Please enter your word, so we could reverse it: ")
    reverse_word(word)
