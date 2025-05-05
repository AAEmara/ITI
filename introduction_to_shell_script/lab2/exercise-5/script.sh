#!/usr/bin/bash
# Substitute all the words that contain "lp" with "mylp" in /etc/passwd file.

sed 's/lp/mylp/g' /etc/passwd
