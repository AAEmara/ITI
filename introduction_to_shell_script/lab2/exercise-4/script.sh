#!/usr/bin/bash
# Display /etc/passwd file except the lines that contain the word "lp".

sed -n "/lp/!p" /etc/passwd
