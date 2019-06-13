var express = require('express'),
    path = require('path'),
    app = express();

// Express Middleware for serving static files (css / js files etc ..)
app.use(express.static(path.join(__dirname, 'public')));

// route
app.get('/', function(req, res) {
    res.redirect('index.html');
});

// listen port 8080
app.listen(8080);