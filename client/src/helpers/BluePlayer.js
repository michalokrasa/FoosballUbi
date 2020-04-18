
export default class BluePlayer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        // call to players.refreshBody() after each input on the given Stick
        // x + graphical alligment offset
        super(scene, x - 2, y, texture);

        // Enables physics for this body
        scene.physics.world.enable(this);

        // Positioning of hitbox
        this.body.setSize(42, 60);
        this.body.setOffset(34, 0);
    }

    kick() {
        this.anims.play("redKick");
    }
}