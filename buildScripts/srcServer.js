// This file will configure the web server that will server up the files in our source directory

var express = require('express'),
    path = require('path'),
    open = require('open'),
    port = 3000,
    app = express()
    ;

app.get('/',
    function(req, res) {
        res.sendFile(path.join(__dirname, '../src/index.html'));
        }
    );

app.listen(port,
    function (err){
        if (err) {
            console.log(err);
            }
        else {
            open('http://localhost:' + port);
            }
        }
    );
