#!/usr/bin/env python3

"""A module that includes a guess game function.
"""

from random import randint


def guess_game():
    """Gives the user a random number with 10 tries to guess the correct number
    """
    play_status: str = "yes"

    while (play_status.lower() == "yes"):
        tries = 0
        truth: int = randint(0, 99)
        guess_list: list = list()

        while (tries != 10):
            guess: int = int(input("Guess a number!: "))

            if guess in guess_list:
                print("Oops, this number was entered before!")
                print("This try won't be counted, Try Again ;)")
                continue

            if guess not in range(100):
                print("Your number is not between 0 and 99!")
                print("This try won't be counted, Try Again ;)")
                continue

            if guess == truth:
                print("Congratulations, you've got it right!")
                truth: int = randint(0, 99)
                if tries == 1:
                    syntax = "try"
                else:
                    syntax = "tries"
                print(f"Guess another number, you have {tries} {syntax} left!")
            elif guess < truth:
                print("Your guess is smaller than the truth! ;)")
            elif guess > truth:
                print("Your guess is bigger than the truth! ;)")

            guess_list.append(guess)
            tries += 1

        play_status: str = input("Would you like to try again? (Yes or No): ")
        if play_status == "no":
            break


if __name__ == "__main__":
    guess_game()
