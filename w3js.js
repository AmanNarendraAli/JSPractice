let http = require("http");
let dt = require("./myfirstmodule");
let url = require("url");
let fs=
http.createServer(function (req,res)
{
    res.writeHead(200,{'ContentType':'text/html'});
    let q=url.parse(req.url,true).query;
    let txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
}).listen(8000)