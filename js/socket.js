// SET UP SOCKET
var socket = new io.Socket(null, {rememberTransport: false, port: 8080});
socket.connect();
socket.addEvent('message', function(data) {

    console.log(data);
    
});
// END SET UP SOCKET
