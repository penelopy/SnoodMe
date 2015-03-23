var Snood = function (game) {
    // console.log(game)
    this.x = 0;
    this.y = 0;
    this.ctx = game.ctx;
};

Snood.prototype.draw = function () {
  // debugger;
    // this.ctx.fillStyle = randomColor();
    this.ctx.fillStyle = "#FAFAFA";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};