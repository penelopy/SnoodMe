var Events = {

    init : function(Cannon) {

        
        document.addEventListener('mousemove', function(event) {
            Cannon.drawCannon.x = event.pageX;
        });

        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 39) {
                View.rightDown = true;
            } else if (event.keyCode == 37) {
                View.leftDown = true;
            }
        });

        document.addEventListener('keyup', function(event) {
            if (event.keyCode == 39) {
                View.rightDown = false;
            } else if (event.keyCode == 37) {
                View.leftDown = false;
            }
        });
    },
};
