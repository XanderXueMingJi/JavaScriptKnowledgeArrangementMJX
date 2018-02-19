const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    if(pathname=='/postMassage01.html') {
        var data = fs.readFileSync('./postMassage01.html').toString();
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(data);
    }
    
    // else if(pathname=='/postMassage02.html') {
    //     var data = fs.readFileSync('./postMassage02.html').toString();
    //     res.writeHead(200, {
    //         'Content-Type': 'text/html; charset=utf-8'
    //     });
    //     res.end(data);
    // }else {
    //     console.log('hello world');
    //     //不是请求 postMassage.html 返回请求状态为404
    //     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    //     res.end('hello world');
    // }

}).listen(8888);
console.log('服务器已经开启: http://127.0.0.1:8888 ');