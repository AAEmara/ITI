#!/usr/bin/bash

user=$(whoami)
mail_file="/var/mail/$user"
last_size=0

while true; do
  if [ -f "$mail_file" ]
    then
      current_size=$(stat -c%s "$mail_file")

      if [ "$current_size" -gt "$last_size" ]
      then
        echo "You have new mail!"
        last_size=$current_size
      fi
    else
      echo "Mail file not found: $mail_file"
      exit 1
    fi

    sleep 10
done
