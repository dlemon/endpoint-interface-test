const axios = require('axios');
const qs = require("querystring");

const url = 'http://equiptrace.nl:8080/test-endpoint';

const data = qs.stringify({
        versie: "2.17",
        actie: "add",
        voertuignr_hexon: 21633902,
        voertuignr: "08de42f4-04a2-11ea-a7ce-42010aa4004e",
        voertuignr_klant: 5675
});

const options = {
    headers: {
        "host": "equiptrace.nl:8080",
        "user-agent": "Doorlinken Voorraad",
        "accept": "*/*",
        "accept-encoding": "deflate, gzip",
        "content-type": "application/X-www-form-urlencoded",
        "expect": "100-continue"
    }
};

function run_test() {
    let success = 0;
    let error = 0;
    let max = 10000;
    let count = 0;

    console.log('going to post', url, max, 'times....');
    let start = Date.now();

    // Send out <max> post requests. These requests are axios promises
    for(i=0;i<max;i++) {
        axios.post(url, data, options)
        .then(function (response) {
            // handle success: if the server responded with "1" this is considered a success
            if (response.data == "1") {
                    success = success + 1
            }
          })
          .catch(function (error) {
            // handle error: something went wrong, print the error and increase error count
            console.log(error);
            error = error + 1
          })
          .finally(function () {
            // always executed: wait until all post requests are executed and then print the test results
            count = count + 1;
            if (count == max) {
                console.log("success: ", (success/max) * 100, "% error: ", (error/max)*100,"%")
                console.log("execution count: ", max);
                console.log("execution time: ", (Date.now() - start)/1000, "seconds.");
            }
          });
    }
}

run_test();