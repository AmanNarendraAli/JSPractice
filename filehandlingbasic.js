let http = require("http");
let dt = require("./myfirstmodule");
let url = require("url");
let fs= require("fs");
http.createServer((req,res) =>
{
    console.log("The date and time are currently" + dt.myDateTime())
    fs.readFile('wassup.txt',(err,data) =>
    {
    res.writeHead(200,{'ContentType':'text/html'});
    res.write(data);
    return res.end();
    });
}).listen(8010);