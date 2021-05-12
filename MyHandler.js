function start(res) {
    let body = '<div>Hello, world! <br> I am in the cloud class.</div>';
    body += '<div><a href="hello">hello 페이지</a></div>'
    res.writeHead(200, { 'content-Type': 'text/html' });
    res.write(body);
    res.end();
}

function hello(res) {
    let body = 'hum information : <br> hum state : <br> hum set : ';
    res.writeHead(200, { 'content-Type': 'text/html' });
    res.write(body);
    res.end();
}

exports.start = start;
exports.hello = hello;