var Game = {

    x : 150,
    y : 150,
    dx : 2,
    dy : 4,
    // var ctx,

    // ballRadius  : 10,
    // rowColors   : ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"],
    // paddleColor : "#FFFFFF",
    // ballColor   : "#FFFFFF",
    // backColor   : "#000000",

    numSnoodRows : 5,
    numSnoodCols : 5,


// init game
    run : function() {
        this.initSnoods();
        this.drawGameboard();
        Events.init();
        Snood.init();


        this.intervalId = setInterval(this.update, 10);
    },


    drawGameboard : function() {
      this.canvas     = document.getElementById('canvas');
      this.ctx   = this.canvas.getContext('2d');
      this.canvasMinX = 0;
      this.canvasMaxX = this.canvasMinX + this.canvas.width;
      this.draw();
      // this.validateBall();
      // Events.init();
      // Snood.init();
      // this.paddle.x = this.canvas.width / 2;

      // return setInterval(this.draw, 10);
    },

    update : function() {
        View.draw();
    },

    loose : function() {
        clearInterval(this.intervalId);
    },

    draw : function() {
        this.ctx.clearRect(0,0,300,600);
        this.drawBall();
        this.initSnoods();
        // this.drawSnoods();
        this.validateBall();
    },

    drawBall : function() {
        this.ctx.fillStyle = "#00A308";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2, true); 
        this.ctx.closePath();
        this.ctx.fill();
    },

    validateBall : function() {
        if (this.x + this.dx < 0 || this.x + this.dx > this.canvas.width) {
          this.dx = -this.dx;
        } 

        if (this.y + this.dy < 0 || this.y + this.dy > this.canvas.height) {
          this.dy = -this.dy;
        } 

        this.x += this.dx;
        this.y += this.dy;
    },


    // drawSnoods : function() {
    // // ctx.fillStyle = "#FF1C0A";
    // // ctx.fillRect(25, 25, 30, 30)
    // for (i=0; i < numSnoodRows; i++) {

    //     for (j=0; j < numSnoodCols; j++) {

    //         if (this.snoods[i][j] == 1) {  //previously Breakout.bricks
    //             this.drawSnood(
    //                 (j * (Snood.snoodWidth + Snood.snoodPadding)) + Snood.snoodPadding,
    //                 (i * (Snood.snoodHeight + Snood.snoodPadding)) + Snood.snoodPadding,
    //                 Snood.snoodWidth,
    //                 Snood.snoodHeight,
    //                 Snooo.rowColors[i]);
    //             }
    //         }
    //     }
    // },

    initSnoods : function() {
        this.snoods = new Array(this.numSnoodRows);

        for (i=0; i < this.numSnoodRows; i++) {

            this.snoods[i] = new Array(this.numSnoodCols);

            for (j=0; j < this.numSnoodCols; j++) {
                this.snoods[i][j] = 1;
            }
        console.log("snood array " + this.snoods)    
        }
    },


// init();

};

Game.run();