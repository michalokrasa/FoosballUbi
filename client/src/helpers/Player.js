
export default class Player {
    constructor(scene) {
        this.players = scene.physics.add.staticGroup();

        // players.create(x, y, 'which player')
        // call to players.refreshBody() after each input on the given Stick
    }


}