

var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var ctx;

// ballRadius  : 10,
// rowColors   : ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"],
// paddleColor : "#FFFFFF",
// ballColor   : "#FFFFFF",
// backColor   : "#000000",

numSnoodRows = 5;
numSnoodCols = 5;


    // init game
    run : function() {
        this.initBricks();

        View.init();
        Events.init();
        this.initEvents();

        this.intervalId = setInterval(this.update, 10);
    },


function init() {
  this.canvas     = document.getElementById('canvas');
  this.ctx   = this.canvas.getContext('2d');
  this.canvasMinX = 0;
  this.canvasMaxX = this.canvasMinX + this.canvas.width;
  Events.init();
  Snood.init();
  // this.paddle.x = this.canvas.width / 2;

  return setInterval(draw, 10);
}

function draw() {
    ctx.clearRect(0,0,300,600);
    this.drawBall();
    this.initSnoods();
    this.drawSnoods();
    this.validateBall();
}

function drawBall() {
    ctx.fillStyle = "#00A308";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
}

function validateBall() {
    if (x + dx < 0 || x + dx > this.canvas.width) {
      dx = -dx;
    } 

    if (y + dy < 0 || y + dy > this.canvas.height) {
      dy = -dy;
    } 

    x += dx;
    y += dy;
}


function drawSnoods() {
    // ctx.fillStyle = "#FF1C0A";
    // ctx.fillRect(25, 25, 30, 30)
    for (i=0; i < numSnoodRows; i++) {

        for (j=0; j < numSnoodCols; j++) {

            if (this.snoods[i][j] == 1) {  //previously Breakout.bricks
                this.drawSnood(
                    (j * (Snood.snoodWidth + Snood.snoodPadding)) + Snood.snoodPadding,
                    (i * (Snood.snoodHeight + Snood.snoodPadding)) + Snood.snoodPadding,
                    Snood.snoodWidth,
                    Snood.snoodHeight,
                    Snooo.rowColors[i]);
            }
        }
    }
}

function initSnoods() {
    this.snoods = new Array(this.numSnoodRows);

    for (i=0; i < this.numSnoodRows; i++) {

        this.snoods[i] = new Array(this.numSnoodCols);

        for (j=0; j < this.numSnoodCols; j++) {
            this.snoods[i][j] = 1;
        }
    console.log("snood array " + this.snoods)    
    }
}


init();