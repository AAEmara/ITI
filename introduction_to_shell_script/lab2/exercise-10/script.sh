#!/usr/bin/bash
# Print line from 5 to 15 from /etc/passwd

awk -F: '(NR >= 5 && NR <= 15) {print NR, $0}' /etc/passwd
