#!/usr/bin/bash
# Changes directory to the user home when called without any arguments.
# Changes the directory to the given directory.

if [ $# -eq 0 ];
  then
    cd ~
elif [ $# -eq 1 ];
  then
    cd "$1"
fi
