import Player from './RedPlayer'

export default class Stick {
    constructor(x, y) {
        this.x = x;
        this.y = y; 
        this.players = scene.physics.add.staticGroup();
    }

    configure(side, playerNumber) {
        if (side === "red") {
            
        }
        
    }

    moveUp() {}
    moveDown() {}
}