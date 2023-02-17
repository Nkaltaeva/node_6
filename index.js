var express = require('express');
const { connect } = require('http2');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(request, respons) {
    respons.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];

io.sockets.on('connection', function(socket) {
    console.log("Соединение");
    connections.push(socket);

    sockets.on('disconnect', function(data) {
        connections.splice(connections.indedex0f(socket), 1);
        console.log("Отсоединение");
    });

    socket.on('send mess', function(data) {
        io.sockets.emit('add mess', {mess: data.mess, name: data.name});
    });
});