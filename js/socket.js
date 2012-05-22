// SET UP SOCKET

/*
var socket = new io.Socket(null, {rememberTransport: false, port: 9000});
socket.connect();
socket.addEvent('message', function(data) {

    console.log(data);
    
});
// END SET UP SOCKET
*/

$(document).ready(function() {
    console.log("I'm about to connect");
    connect();
});

function connect() {
    ws = new WebSocket("ws://ccpc-twn.bath.ac.uk:9000/echoSocket?name=TestUser");
    //ws = new WebSocket("ws://ccpc-twn.bath.ac.uk:9000/helloSocket?name=TestUser");

    ws.onopen = function(evt) { 
        console.log("connected");
    }

    ws.onclose = function(evt) {
        console.log("disconnected");
    }

    ws.onmessage = function(evt) {
        console.log("response: " + evt.data);
    }

    ws.onerror = function(evt) {
        console.log("error: " + evt.data);
    }
}

function disconnect() {
    ws.close();
}


// is this of any use?
// http://stackoverflow.com/questions/7919856/how-to-use-websockets-with-play-framework
