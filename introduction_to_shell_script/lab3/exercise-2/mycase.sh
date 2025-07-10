#!/usr/bin/bash
# Checks the type of string entered by a user and printing it, where
# it could be: Upper Cases, Lower Cases, Numbers, Mix, or Nothing.

string="$1"
RED='\033[0;31m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
MAGENTA='\033[0;35m'
NC='\033[0m'

if [[ -z "$string" ]]; then
  echo -e "${RED}String is Nothing${NC}"
elif [[ "$string" =~ ^[A-Z]+$ ]]; then
  echo -e "${BLUE}String is Upper Cases${NC}"
elif [[ "$string" =~ ^[a-z]+$ ]]; then
  echo -e "${YELLOW}String is Lower Cases${NC}"
elif [[ "$string" =~ ^[0-9]+$ ]]; then
  echo -e "${GREEN}String is Numbers${NC}"
elif [[ "$string" =~ ^[A-Za-z0-9]+$ ]]; then
  echo -e "${MAGENTA}String is a Mix${NC}"
else
  echo -e "${RED}String is Unexpected!${NC}"
fi
