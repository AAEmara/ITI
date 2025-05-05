#!/usr/bin/bash
# Change lp to mylp

awk -F: '{gsub("lp", "mylp"); print $0}' /etc/passwd
