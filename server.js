var express = require('express'),
    server = express();

// express configuration
server.configure(function(){
    server.set('port', process.env.PORT || 6969);
    server.use(express.bodyParser());
    server.use(express.logger());
});

// monitorng
var sys = require('util'),
    exec = require('child_process').exec,
    child;
server.get('/uptime', function (request, response) {
    response.setHeader('Server', 'brewBerri Pi');
    child = exec("uptime", function (error, stdout, stderr) {
        response.json({'message':'UPTIME: ' + stdout});
    });
});



server.listen(server.get('port'));
