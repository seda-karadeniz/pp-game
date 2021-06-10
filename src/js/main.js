import rectangle from "./rectangle";
import controller from "./controller";
import ball from "./ball";

const game ={
    canvas : document.getElementById('game'),
    ctx: null,
    hasStarted: false,

    init(){
        this.ctx = this.canvas.getContext('2d');
        controller.init(this);
        rectangle.init(this);
        ball.init(this);
        this.animate();
    },

    animate(){
        requestAnimationFrame(()=>{
            this.animate();
        })
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        if (this.hasStarted){
            rectangle.update();
            ball.update();
        }


    },
}
game.init();