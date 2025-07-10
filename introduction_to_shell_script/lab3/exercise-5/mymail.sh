#!/usr/bin/bash

mail_template=./mtemplate
subject="Test Subject"

for user in $(awk -F: '$3 >=1000 && $1 != "nobody" {print $1}' /etc/passwd)
  do
    mail -s "$subject" "$user" < "$mail_template"
done
