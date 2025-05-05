#!/usr/bin/bash
# Display /etc/passwd file except the third line.

sed "3 d" /etc/passwd
