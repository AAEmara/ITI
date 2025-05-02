#!/usr/bin/bash
# Lists the current directory, if it's called without arguments.
# Otherwise, it lists the given directory.

if [ $# -eq 0 ];
  then
    ls 
else
    ls "$1"
fi
