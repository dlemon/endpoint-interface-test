# endpoint-interface-test
Stress testing Endpoint API Server at http://equiptrace.nl:8080/

The test program uses the same headers and data of 'Doorlinken Voorraad' as they appear in the test request 

## pre-requisites
latest nodejs installed, including package manager npm. Node can be run on Windows or Linux, making the test program cross platform.

## Installation

    git clone https://github.com/dlemon/endpoint-interface-test.git
    cd endpoint-interface-test
    npm install

## Usage

Without arguments 5000 simultaneous requests are posted to http://equiptrace.nl:8080/test-endpoint
An optional argement can be given to set the number of requests to post

### Use the test program without arguments
    node test.js

### Use the test program with a number set
    node test.js 1000


## Example output
In the examples we connect via a VPN, so the client has multiple IP addresses

    node test 1000

    external IP address of client:  192.168.178.47
    external IP address of client:  10.200.174.7
    IP Address equiptrace.nl     :  145.131.163.77

    posting 1000 simulteanuous requests to add a vehicle via http://equiptrace.nl:8080/test-endpoint
    success:  100 % error:  0 %
    execution count:  1000
    execution time:  12.414 seconds.
    {}

## Error logging
Emperical testing determined that around 9000 simulteanous request a timeout starts occurs for a portion of the the requests. The errors that occur in the request are being logged in the final line of the output.

    external IP address of client:  192.168.178.47
    external IP address of client:  10.200.174.7
    IP Address equiptrace.nl     :  145.131.163.77

    posting 9000 simulteanuous requests to add a vehicle via http://equiptrace.nl:8080/test-endpoint
    success:  99.9888888888889 % error:  0.011111111111105743 %
    execution count:  9000
    execution time:  223.711 seconds.
    { ETIMEDOUT: 1 }

At 100.000 requests the endpoint detoriates quickly:


## Responsiveness of the Endpoint
At the time of writing at least 5000 simultaneous requests can be handled by the endpoint without errors.
