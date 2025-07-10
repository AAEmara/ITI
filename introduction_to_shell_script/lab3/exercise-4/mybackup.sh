#!/usr/bin/bash

# Getting the current workding direcotry.
work_dir=${PWD}

# Creating the backup directory.
backup_dir="$work_dir/backup"
mkdir -p "$backup_dir"

# Finding all the hidden and non-hidden files and backing them up.
find "$HOME"/. "$HOME" -type f 2>/dev/null | while read -r file; do
  # Strpping away the home path before the file's path.
  relative_path="${file#$HOME/}"

  # Making file's directory while stripping away the file's name.
  mkdir -p "$backup_dir/$(dirname "$relative_path")"

  # Copying the file content into the relevant path.
  cp "$file" "$backup_dir/$relative_path"
done
