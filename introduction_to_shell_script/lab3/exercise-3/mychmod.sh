#!/usr/bin/bash
# Finds files, directories, and subdirectories recursively inside the
# home directory, and then reads them to give them an executable permission.
find "$HOME"/. "$HOME" -mindepth 1 \( -type f -o -type d \) | while read -r element; do
  chmod +x "$element"
done
