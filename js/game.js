var Game = function (ctx) {
  // debugger;
    this.snoodArray = [];
    this.bulletArray = [];
    this.ctx = ctx;
    this.padding = 25;
    numSnoods = 5;
    this.xOffset = 20;

    for (var i=0; i < numSnoods; i++) {
        newSnood = new Snood(this);
        newSnood.x = this.xOffset + i * this.padding;
        newSnood.y = 25;

        this.snoodArray.push(newSnood);
    }
    this.draw();
};

Game.prototype.draw = function() {
    for (var i=0; i < this.snoodArray.length; i++) {
        this.snoodArray[i].draw();
    }
};