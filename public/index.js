var express = require('express');

var app = express();

app.get('/*', function(req, res){
    res.sendFile('/var/www/public/index.html');
});

app.listen(3000);