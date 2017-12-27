// This file will configure the web server that will server up the files in our source directory

import express from 'express';
import path from 'path';
import open from 'open';

/* TO CONFIGURE WEBPACK WITH THE WEB SERVER, WHICH IS EXPRESS */
import webpack from 'webpack';
import config from '../webpack.config.dev';


const
    port = 3000,
    app = express(),
    compiler = webpack(config);
	;

app.use(
    require('webpack-dev-middleware')(
        compiler,
        {noInfo: true,
        publicPath: config.output.publicPath
            }
        )
    );

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
