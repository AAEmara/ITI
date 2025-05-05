#!/usr/bin/bash
# Print all information about greatest uid.

awk -F: 'BEGIN {max = 0} {if (max < $3) max = $3}
	END {print max}
	' /etc/passwd
