function start(res) {
    let body = 'hum portnumber';
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function hello(res) {
    let body = 'hum information : <br> hum state : <br> hum set : ';
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(body);
    res.end();
}

exports.start = start;
exports.hello = hello;