#!/usr/bin/env python3

def print_document(static_string: str):
    """Prints the given string.
    """
    print(f"{static_string}")


if __name__ == "__main__":
    static_string: str = (
        f"Sample string\n"
        f"a string that you \"don't\" have to escape\n"
        f"This\nis a ....... multi-line\n"
        f"heredoc string --------> example"
    )
    print_document(static_string)
