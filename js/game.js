(function () {
  if (typeof Snood === "undefined") {
    window.Snood = {};
  }

  var Game = Snood.Game = function (options) {
    // this.x = 150;
    // this.y = 150;
    // this. dx =  2;
    // this. dy =  4;

    this.numSnoodRows = 5;
    this.numSnoodCols = 5;
    this.snoodBlocks = [];
    this.bullets = [];
    this.cannons = [];
    this.ctx = options.ctx;
    this.canvasWidth = options.width;
    this.canvasHeight = options.height;
    this.numPlayers = 100;
    // this.rowColors   = ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"];
    this.rowColors = ["F8C7DC", "45301B", "FAE2EC"];

  };

  var Circle = function() {
    this.x = 0;
    this.y = 0;
    this. dx =  2;
    this. dy =  4;
    this.color = color;
    this.radius = radius;
    this.visibility = True;

    function draw(x, y, color, radius) {
      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI*2, true);
      this.ctx.closePath();
      this.ctx.fill();
    }
  };

  Game.prototype.start = function() {
    this.initSnoods();
    
    this.cannon = new Snood.Cannon( {
      "game": this
      });
    var littleCircle = new Circle({
      "x" : 0,
      "y" : 0,
      "dx" : 2,
      "dy" : 4,
      "color" : blue,
      "radius" : 15
    });
    // Events.init();
    this.cannon.aimCannon();
    setInterval(this.draw.bind(this), 10);
  };

  Game.prototype.draw = function() {
    this.cannonBall();
    this.drawSnoods();
    // console.log("x =" + this.cannon.x);
    // this.cannon.drawCannon();
  };

  Game.prototype.rect = function(x,y,w,h, color) {
    // this.ctx.fillStyle = "#00A308";
    // randNum = function getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min)) + min;
    // };
    // for (var i = 0; i < 4; i++ );
    //   this.ctx.fillStyle = this.rowColors[i];

    this.ctx.beginPath();
    this.ctx.rect(x,y,w,h);
    this.ctx.closePath();
    this.ctx.fill();
  };

  Game.prototype.drawCircle = function() {

    // this.ctx.clearRect(0,0,300,600);
    // this.ctx.fillStyle = color;
    // this.ctx.beginPath();
    // this.ctx.arc(x, y, radius, 0, Math.PI*2, true);
    // this.ctx.closePath();
    // this.ctx.fill();
  };

  Game.prototype.cannonBall = function() {
    // this.ctx.fillStyle = "#00A308";
    this.drawCircle(150, 150, "#00A308", 10);
    this.validateBall();
  };

  // function originally written for breakout - will need to be rewritten as bullet function
  Game.prototype.validateBall = function(littleCircle) {
    if (x + this.dx < 0 || x + this.dx > this.canvasWidth) {
      this.dx = -this.dx;
    }

    if (y + this.dy < 0 || y + this.dy > this.canvasHeight) {
      this.dy = -this.dy;
    }
    x += this.dx;
    y += this.dy;
  };


// initializes array to contain snoodblocks, indicate presence/absense of snoodblock  
//GOAL: initialize 100+ snoods and place in array for access on gameboard and cannon

  Game.prototype.initSnoods = function() {
    // this.ctx.fillStyle = "#FF1C0A";
    // this.drawCircle("#FF1C0A", 20);

    this.snoods = new Array(this.numSnoodRows);

    for (i=0; i < this.numSnoodRows; i++) {
      this.snoods[i] = new Array(this.numSnoodCols);
      for (j=0; j < this.numSnoodCols; j++) {
        this.snoods[i][j] = 1;
      }
    }
      // console.log(this.snoods);
  };


  Game.prototype.drawSnoods = function() {
    // this.snoodPieces = new Array(this.numPlayers);
    // for (var i = 0; i < this.numPlayers; i++) {
    //   // this.snoodPieces[]
    // }
    // this.drawBall();
    // ctx.fillStyle = "#FF1C0A";
  // ctx.fillRect(25, 25, 30, 30)
    // for (i =0; i < this.numSnoodRows; i++) {
    //   for (var x = 0; x < 4; x++ );
    //   for (j=0; j < this.numSnoodCols; j++) {
    //     if (this.snoods[i][j] == 1) {
    //       x = (j * 55);
    //       y = (i * 55);
    //       // width = 40;
    //       // height = 40;
    //       // color = x;

    //       this.drawCircle("#FF1C0A", 20);

      var newSnood = new Snood.SnoodBlock({
        "x" : 50,
        "y" : 350,
        "color" : "#FF1C0A",
        "radius" : 20
      });
      this.drawCircle(newSnood.x, newSnood.y, newSnood.color, newSnood.radius);

          // this.rect(x, y, width, height, color);

    //     }
    //   }
    // }
  };

    // for (i=0; i < NROWS; i++) {
    // ctx.fillStyle = rowcolors[i];
    // for (j=0; j < NCOLS; j++) {
    //   if (bricks[i][j] == 1) {
    //     rect((j * (BRICKWIDTH + PADDING)) + PADDING, 
    //          (i * (BRICKHEIGHT + PADDING)) + PADDING,
    //          BRICKWIDTH, BRICKHEIGHT);
    //   }


})();
