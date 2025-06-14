#!/usr/bin/bash
# Checks the type of string entered by a user and printing it, where
# it could be: Upper Cases, Lower Cases, Numbers, Mix, or Nothing.

case "$1" in 
  [A-Z])
    echo "Character is Upper Case!"
    ;;
  [a-z])
    echo "Character is Lower Case!"
    ;;
  [0-9])
    echo "Character is a Number!"
    ;;
  *)
    echo "Character is Nothing!"
esac
