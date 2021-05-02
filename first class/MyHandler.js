function start(res) {
    let body = '가습기 정보 : <br> 가습기 상태 : <br> 가습기 설정 치 : ';
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function hello(res) {
    let body = 'This is my first web server.';
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(body);
    res.end();
}

exports.start = start;
exports.hello = hello;