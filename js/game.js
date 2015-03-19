
var Game = {
    // x : 150,
    // y : 150,
    // dx : 2,
    // dy : 4,

    // ballRadius  : 10,
    // rowColors   : ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"],
    // paddleColor : "#FFFFFF",
    // ballColor   : "#FFFFFF",
    // backColor   : "#000000",

    // numSnoodRows : 5,
    // numSnoodCols : 5,


// init game
    run : function() {
        SnoodBlock.initSnoods();
        this.drawGameboard();
        // this.drawBall();
        // this.validateBall();
        // this.ctx.clearRect(0,0,300,600);

        // this.initSnoods();

        Events.init();
        Snood.init();

        // this.intervalId = setInterval(this.update, 10);
      return setInterval(this.draw.bind(this), 10);
      // return setInterval(this.draw, 10);

    },


    // drawGameboard : function() {
    //   this.canvas     = document.getElementById('canvas');
    //   this.ctx   = this.canvas.getContext('2d');
    //   this.canvasMinX = 0;
    //   this.canvasMaxX = this.canvasMinX + this.canvas.width;
    //   // this.draw();

    //   // return setInterval(this.draw, 10);
    // },


    draw : function() {
        // debugger;
        this.drawBall();
        // Game.drawBall();
        // this.initSnoods();
        // this.drawSnoods();
        // this.validateBall();
    },

    // drawBall : function() {
    //     this.ctx.fillStyle = "#00A308";
    //     this.ctx.beginPath();
    //     this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2, true); 
    //     this.ctx.closePath();
    //     this.ctx.fill();
    //     this.validateBall();

    //     // this.ctx.clearRect(0,0,300,600);
    // },

    // validateBall : function() {
    //     console.log("hi");
    //     if (this.x + this.dx < 0 || this.x + this.dx > this.canvas.width) {
    //       this.dx = -this.dx;
    //     }

    //     if (this.y + this.dy < 0 || this.y + this.dy > this.canvas.height) {
    //       this.dy = -this.dy;
    //     } 
    //     console.log("bye");
    //     this.x += this.dx;
    //     this.y += this.dy;
    // },

    //  rect : function(x,y,w,h) {
    //   this.ctx.beginPath();
    //   this.ctx.rect(x,y,w,h);
    //   this.ctx.closePath();
    //   this.ctx.fill();
    // },





// init();

};

Game.run();