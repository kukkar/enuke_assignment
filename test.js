var express = require('express');
var pid = process.pid;
var app = express();
var router = express.Router();


router.get('/test',function (req,res) {
console.log("Hello I am in test");
process.on('testing',function () {
	console.log(res);
	return res.
		  	status(200).
		  	send("sucess");
	console.log("KUkar is here");
});

kukkar(res);	
});

function kukkar () {
	for(var i=0;i<10;i++) {
		if(i>=9) {
			process.emit('testing');
		}
	}
}
app.use('/api', router);

var server = app.listen(3000,function () {
		console.log('Listening on port !', server.address().port);
		console.log(`started process ${pid}`);	
	});



