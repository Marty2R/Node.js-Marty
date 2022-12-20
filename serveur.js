const fs = require('fs');
const http = require("http");
const os = require("os");

const port = 1337;
const host = 'localhost';

const server = http.createServer(function (req, res) {
    const url = req.url;
    if (url === "/text") {
        fs.readFile("test.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return
            }
            res.end("Content : " + data);
        });
    }
});

server.listen(port, host, function () {
    console.log('Web server is running on port 1337');
});
