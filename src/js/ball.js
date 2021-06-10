import rectangle from "./rectangle";

const ball ={
    game : null,
    x :0,
    y: 0,
    width:10,
    height:10,
    speed:4,

    init(game){
        this.game = game;
        this.x = game.canvas.width- this.width;
        this.y = game.canvas.height/2;
    },

    update() {
        this.draw();
        this.collisionRectangle();

        if (this.y + this.height > this.game.canvas.height || this.y < 0){
            this.speed = -this.speed
        }
        if (this.x + this.width > this.game.canvas.width || this.x  < 0){
            this.speed = -this.speed
        }

        this.x += this.speed;

        //this.y += this.speed;

    },

    draw() {
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fillStyle = "white";
        this.game.ctx.fill();
    },
    collisionRectangle(){
        /*detection du haut du rectangle*/
        if (this.x < rectangle.x + rectangle.width &&
            this.x + this.width > rectangle.x &&
            this.y < rectangle.y + (rectangle.height/2) &&
            this.height + this.y > rectangle.y) {

                this.speed = -this.speed;
            this.y -= this.speed;

            console.log('oui')
        }
        /*detection du bas du rectangle*/
        else if (this.x < rectangle.x + rectangle.width &&
            this.x + this.width > rectangle.x &&
            this.y < (rectangle.y + rectangle.y) + (rectangle.height/2) &&
            this.height + this.y > rectangle.y) {

            this.speed = -this.speed;

            console.log('non')
        }




    }
}
export default ball;