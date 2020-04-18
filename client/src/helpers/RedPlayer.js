
export default class RedPlayer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        // call to players.refreshBody() after each input on the given Stick
        // x + graphical alligment offset
        super(scene, x + 3, y, texture);

        //this.setOrigin(0, 0);
        //this.setSize(50, 50, true);
        // Enables physics for this body
        scene.physics.world.enable(this);
        
        this.body.setSize(42, 60);
        this.body.setOffset(26, 0);
    }

    kick() {
        this.anims.play("blueKick");
    }
}