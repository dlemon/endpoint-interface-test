# endpoint-interface-test
Stress testing Endpoint API Server at http://equiptrace.nl:8080/

## pre-requisites
latest nodejs installed, including package manager npm

## Installation

    git clone https://github.com/dlemon/endpoint-interface-test.git
    cd endpoint-interface-test
    npm install

## Execute 10000 posts at http://equiptrace.nl:8080/test-endpoint
    node test.js

## Example output
    going to post http://equiptrace.nl:8080/test-endpoint 10000 times....
    success:  100 % error:  0 %
    execution count:  10000
    execution time:  72.259 seconds.