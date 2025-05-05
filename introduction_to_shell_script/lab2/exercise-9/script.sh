#!/usr/bin/bash
# Print login, uid, and full name (comment) of those uid is exactly 500.

awk -F: '$3==500 {print "Login: " $1, "UID: " $3, "Full Name: " $5}' /etc/passwd
