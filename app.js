"use strict"
var express = require('express');
var pid = process.pid;
//const cluster = require('cluster');
const os =  require('os')
var app = express();
var router = express.Router();
//process.env.UV_THREADPOOL_SIZE = 42
app.use('/api/v1', require('./api')(router));

/*Using clustering make high avaialability of server to consume api's
Now it will able to consume all the processor in once and if a processor is loaded
with work cluster automatically forward to other processor process*/

debugger;

/*if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPU`);
  for (var i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {*/
	var server = app.listen(3000,function () {
		console.log('Listening on port !', server.address().port);
		console.log(`started process ${pid}`);	
	});
//}