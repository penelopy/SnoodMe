(function () {
  if (typeof Snood === "undefined") {
    window.Snood = {};
  }

//when i create an instance of snoodblock pass in game (will probably be "this")
  var SnoodBlock = Snood.SnoodBlock = function (game) {
    this.game = game;
    this.x  = 250;
    this.y  = 250;

    this.canvasMinX = 0;
    this.canvasMaxX = 0;

    this.snoodWidth   = 0;
    this.snoodHeight  = 15;
    this.snoodPadding = 1;

    this.rowColors   = ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"];
  };

  SnoodBlock.COLOR = "#505050";
  SnoodBlock.RADIUS = 25; //change to rectangle later
  SnoodBlock.SPEED = 4;

// Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


})();


//MIGHT USE THIS LATER FOR COLLIDE
// SnoodBlock.prototype.collideWith = function (otherObject) {
//   if (otherObject instanceof Snood.Cannon) {   //again Ship reference here
//     otherObject.relocate();
//   }
// };
