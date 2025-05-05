#!/usr/bin/bash
# Sum of all accounts id's.

awk -F: '{s += $3} END {print s}' /etc/passwd
