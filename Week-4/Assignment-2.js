// Require https module
const https = require('https');

function ajax(src, callback) {
    // your code here

    // Connect to the API URL: request
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Read the data
            const callback = () => {
                document.getElementsByTagName('p').innerHTML = xhr.responseText;
            };
        }
    };
    xhr.open('GET', src);
    xhr.send();
}

function render(data) {
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    const header = document.querySelector('main-header');
    let dataSpace = document.createElement('p');
    header.appendChild(dataSpace);
    // const data = ;
    dataSpace.textContent = data; //?
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page