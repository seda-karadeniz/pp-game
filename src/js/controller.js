import rectangle from "./rectangle";

const gameController ={
    init(game){
        window.addEventListener('keydown', (e)=>{
            if(e.key === ' '){
                if (!game.hasStarted){
                    game.hasStarted = true;
                }

            }
            if (e.key === 'ArrowDown'){
                rectangle.goDown();
            }
            else if (e.key === 'ArrowUp'){
                rectangle.goUp();
            }
        })
    },
}
export default gameController;