// SET UP SOCKET
var socket = new io.Socket(null, {rememberTransport: false, port: 8080});
socket.connect();
socket.addEvent('message', function(data) {

    console.log(data);
    
});
// END SET UP SOCKET

// is this of any use?
// http://stackoverflow.com/questions/7919856/how-to-use-websockets-with-play-framework
