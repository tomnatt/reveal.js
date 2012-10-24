// SET UP SOCKET

$(document).ready(function() {
    
    console.log("I'm about to connect");
    
    // ready the controls
    connectControl();
    controlConnectionReady();
    
    // ready the talky channel
    connectChat();
    chatConnectionReady();
    
});

controlCount = 0;
function controlConnectionReady() {
    if (controlCount > 20) {
        console.log("control connection giving up");
    } else if (ws1.readyState != 1) {
        controlCount++;
        setTimeout(controlConnectionReady, 500);
    } else {
        // ready
    }
}

chatCount = 0;
function chatConnectionReady() {
    if (chatCount > 20) {
        console.log("chat connection giving up");
    } else if (ws2.readyState != 1) {
        chatCount++;
        setTimeout(chatConnectionReady, 500);
    } else {
        // ready
    }
}


function connectControl() {
    ws1 = new WebSocket("ws://localhost:8080/");

    ws1.onopen = function(evt) { 
        console.log("control connected");
    }

    ws1.onclose = function(evt) {
        console.log("control disconnected");
    }

    ws1.onmessage = function(evt) {
        motion(evt.data);
    }

    ws1.onerror = function(evt) {
        console.log("control error: " + evt.data);
    }
    
}

function connectChat() {
    ws2 = new WebSocket("ws://localhost:8081/");

    ws2.onopen = function(evt) { 
        console.log("chat connected");
    }

    ws2.onclose = function(evt) {
        console.log("chat disconnected");
    }

    ws2.onmessage = function(evt) {
        chat(evt.data);
    }

    ws2.onerror = function(evt) {
        console.log("chat error: " + evt.data);
    }
    
}

// respond to incoming signals
function motion(data) {
    
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

queue = new Array();
function chat(data) {
    console.log("chat: " + data);
    
    // add message to queue
    queue.push(data);
}

$(document).ready(function() {
    setInterval(function() {
        if (queue.length > 0) {
            $('#onTop p').fadeOut(500, function() {
                $(this).text(queue.shift()).fadeIn(500);
            });
        }
    }, 4000);
});
