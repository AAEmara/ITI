#!/usr/bin/bash
# Print login, full name (comment) and home directory of all users.
# It prints each line preceeded by a line number.

awk -F: '{print NR, $1, $5, $6}' /etc/passwd
