var Snood = {
  
    x  : 250,
    y  : 250,

    canvasMinX : 0,
    canvasMaxX : 0,

    snoodWidth   : 0,
    snoodHeight  : 15,
    snoodPadding : 1,

    rowColors   : ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"],



    init : function() {
        drawSnoods();
    },

    drawSnoods : function() {
    // ctx.fillStyle = "#FF1C0A";
    // ctx.fillRect(25, 25, 30, 30)
    for (i=0; i < Game.numSnoodRows; i++) {

        for (j=0; j < Game.numSnoodCols; j++) {

            if (this.snoods[i][j] == 1) {  //previously Breakout.bricks
                Game.drawSnood(
                    (j * (this.snoodWidth + this.snoodPadding)) + this.snoodPadding,
                    (i * (this.snoodHeight + this.snoodPadding)) + this.snoodPadding,
                    this.snoodWidth,
                    this.snoodHeight,
                    this.rowColors[i]);
                }
            }
        }
    },


};