#!/usr/bin/bash
# Display the lines that contain the word "lp" in /etc/passwd/file.

sed -n '/lp/p' /etc/passwd
