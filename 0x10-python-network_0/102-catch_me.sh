#!/bin/bash
#  Bash script that makes a request to 0.0.0.0:5000/catch_me that causes the server to respond with a message containing You got me!, in the body of the response.
curl -sX POST -H "Content-Type: application/json" -d '{}' "$1" | grep -q "You got me!" && echo "Success: Server response contains 'You got me!'" || echo "Error: Server response does not contain 'You got me!'"

