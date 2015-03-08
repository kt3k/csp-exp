


var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

    var html = '';
    html += '<script src="/eval.js"></script>';
    html += '<script src="/function-constructor.js"></script>';
    html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js"></script>';
    html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/mo/1.7.3/lang/es6-promise.js"></script>';

    res.append('Content-Security-Policy', 'script-src \'self\'');

    res.send(html);

});


var server = app.listen(process.env.port || 3001, function () {

    console.log('server started at port %s', server.address().port);

});
