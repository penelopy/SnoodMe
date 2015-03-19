//function below "Snood" may be incorrect reference
(function () {
  if (typeof Snood === "undefined") {
    window.Snood = {};
  }

  var Cannon = Snood.Cannon = function (options) {
    this.x = 150;
    this.y = 350;
    this.game = options.game;
    this.ctx = this.game.ctx;

    // fire function

    // eventHandlers - for mousemotion and mouseclick


    //move this to utilities and share with Game
  Cannon.prototype.rect = function(x,y,w,h) {
    this.ctx.fillStyle = "#FF1C0A";
    this.ctx.beginPath();
    this.ctx.rect(x,y,w,h);
    this.ctx.closePath();
    this.ctx.fill();
  };

  Cannon.prototype.drawCannon = function() {
    this.rect(this.x, this.y, 10, 100);
  };

};



 })();