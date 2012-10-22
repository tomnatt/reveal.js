// SET UP SOCKET

$(document).ready(function() {
    console.log("I'm about to connect");
    connectControl();
    
    connectionReady();
    
});

function connectionReady() {
    if (ws1.readyState != 1) {
        setTimeout(connectionReady, 500);
        console.log("round again");
    } else {
        // ready
    }
}

function connectControl() {
    ws1 = new WebSocket("ws://localhost:8080/");

    ws1.onopen = function(evt) { 
        console.log("connected");
    }

    ws1.onclose = function(evt) {
        console.log("disconnected");
    }

    ws1.onmessage = function(evt) {
        doSomething(evt.data);
    }

    ws1.onerror = function(evt) {
        console.log("error: " + evt.data);
    }
    
}

function disconnect() {
    ws1.close();
}

function send(words) {
    ws1.send(words);
}

// respond to incoming signals
function doSomething(data) {

    if (data == "move up") { 
        // up 
        Reveal.navigateUp();
    } else if (data == "move left") {
        // left
        Reveal.navigateLeft();
    } else if (data == "move down") {
        // down
        Reveal.navigateDown();
    } else if (data == "move right") {
        // right
        Reveal.navigateRight();
    }
    
}


// is this of any use?
// http://stackoverflow.com/questions/7919856/how-to-use-websockets-with-play-framework
