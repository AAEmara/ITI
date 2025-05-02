#!/usr/bin/bash
# Lists the current directory, if it's called without arguments.
# Otherwise, it lists the given directory.
# -l: list in long format
# -a: list all entries including the hiding files.
# -d: if an argument is a directory, list only its name
# -i: print inode number
# -R: recursively list subdirectories

case "$1" in
  -l) ls -l "${2:-.}" ;;
  -a) ls -a "${2:-.}" ;;
  -d) ls -d "${2:-.}" ;;
  -i) ls -i "${2:-.}" ;;
  -R) ls -R "${2:-.}" ;;
  *) ls . ;;
esac
