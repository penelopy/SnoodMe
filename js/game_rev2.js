(function () {
  if (typeof Snood === "undefined") {
    window.Snood = {};
  }

  var Game = Snood.Game = function (options) {
    this.x = 150;
    this.y = 150;
    this. dx =  2;
    this. dy =  4;

    this.numSnoodRows = 5;
    this.numSnoodCols = 5;
    this.snoodBlocks = [];
    this.bullets = [];
    this.cannons = [];
    this.ctx = options.ctx;
    this.canvasWidth = options.width;
    this.canvasHeight = options.height;

  };

  Game.prototype.start = function() {
    this.initSnoods();
    setInterval(this.draw.bind(this), 10);
  };

  Game.prototype.draw = function() {
    this.drawBall();
    this.drawSnoods();
    // this.canvas = document.getElementById('canvas'); //necessary? duplicate of index.html? 
    // this.ctx = this.canvas.getContext('2d');        // see above
    // this.canvasMinX = 0;
    // this.canvasMaxX = this.canvasMinX + this.canvas.width;
    // this.draw();
    // return setInterval(this.draw, 10);
  };

  Game.prototype.rect = function(x,y,w,h) {
    this.ctx.beginPath();
    this.ctx.rect(x,y,w,h);
    this.ctx.closePath();
    this.ctx.fill();
  };

  Game.prototype.drawBall = function() {
    this.ctx.fillStyle = "#00A308";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
    this.validateBall();
    // this.this.ctx.clearRect(0,0,300,600);
  };

  // function originally written for breakout - will need to be rewritten as bullet function
  Game.prototype.validateBall = function() {
    if (this.x + this.dx < 0 || this.x + this.dx > this.canvasWidth) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy < 0 || this.y + this.dy > this.canvaseight) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };


// initializes array to contain snoodblocks, indicate presence/absense of snoodblock  
  Game.prototype.initSnoods = function() {
    this.snoods = new Array(this.numSnoodRows);

    for (i=0; i < this.numSnoodRows; i++) {
      this.snoods[i] = new Array(this.numSnoodCols);
      for (j=0; j < this.numSnoodCols; j++) {
        this.snoods[i][j] = 1;
      }
    }
  };

  Game.prototype.drawSnoods = function() {
  // ctx.fillStyle = "#FF1C0A";
  // ctx.fillRect(25, 25, 30, 30)
    for (i=0; i < this.numSnoodRows; i++) {
      for (j=0; j < this.numSnoodCols; j++) {
        if (this.snoods[i][j] == 1) {
          x = (j * (this.snoodWidth + this.snoodPadding)) + this.snoodPadding;
          y = (i * (this.snoodHeight + this.snoodPadding)) + this.snoodPadding;
          width = this.snoodWidth;
          height = this.snoodHeight;

          this.rect(x, y, width, height, SnoodBlock.rowColors[i]);

        }
      }
    }
  };


})();
