var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });

    socket.on('chatEvent', function (data) {
        console.log('Data on Server --> ' + data);
        socket.emit('chatEvent', {textData: data});
    });

});

server.listen(1200, function () {
    console.log('Server connected..');
});
