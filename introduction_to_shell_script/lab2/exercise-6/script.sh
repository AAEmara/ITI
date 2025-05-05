#!/usr/bin/bash
# Print full name (comment) of all users in the system.

awk -F: '{print "Full Name: " $5}' /etc/passwd
