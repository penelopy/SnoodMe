var Snood = function () {
    this.x = 0;
    this.y = 0;
    

};

Snood.prototype.draw = function () {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};

snood1 = new Snood();
snood1.x = 5;
snood1.y = 6;

snood2 = new Snood();
snood2.x = 9;
snood2.y = 3;

snood1.draw();
snood2.draw();


/////////////////////////////////

var Game = function () {
    this.snoodArray = [];
    this.bulletArray = [];

    numSnoods = 5;

    for (var i=0; i < numSnoods; i++) {
        newSnood = new Snood();
        newSnood.x = i;
        newSnood.y = i;
        this.snoodArray.push(newSnood);
    }
};

Game.prototype.draw = function() {
    for (var i=0; i < this.snoodArray.length; i++) {
        this.snoodArray[i].draw();
    }
};