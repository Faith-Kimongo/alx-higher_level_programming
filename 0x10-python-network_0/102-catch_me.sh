#!/bin/bash

# Make a request to 0.0.0.0:5000/catch_me
response=$(curl -s 0.0.0.0:5000/catch_me)

# Check if the response contains "You got me!"
if [[ $response == *"You got me!"* ]]; then
    # Do nothing, the message is in the response
    :
else
    echo "Error: Server response does not contain 'You got me!'"
fi

