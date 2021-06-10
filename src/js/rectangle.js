const rectangle ={
    game : null,
    x :50,
    y: 50,
    width:20,
    height:100,
    speed:4,

    init(game){
        this.game = game;


    },

    update(){

        this.draw();

    },

    draw(){
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fillStyle = "white";
        this.game.ctx.fill();
    },

    goDown(){
        if (this.y + this.height > this.game.canvas.height || this.y < 0){
            this.speed = -this.speed;
        }


        this.y += this.speed;
    },
    goUp(){
        if ( this.y < 0 || this.y + this.height > this.game.canvas.height){
            this.speed = -this.speed;
        }


        this.y -= this.speed;
    }

}
export default rectangle;