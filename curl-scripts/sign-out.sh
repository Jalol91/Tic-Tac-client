#!/bin/bash
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
      
    }
  }'
echo
