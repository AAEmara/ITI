#!/usr/bin/bash
# Display /etc/passwd file except the last line.

sed -n "$ p" /etc/passwd
