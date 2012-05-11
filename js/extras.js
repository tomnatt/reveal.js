$(document).ready(function() {

    $(document).keydown(function(e) {
    
        if (e.keyCode == 87) { // w
            // up 
            Reveal.navigateUp();
        } else if (e.keyCode == 65) { // a
            // left
            Reveal.navigateLeft();
        } else if (e.keyCode == 83) { // s
            // down
            Reveal.navigateDown();
        } else if (e.keyCode == 68) { // d
            // right
            Reveal.navigateRight();
        }
        
    });

});
