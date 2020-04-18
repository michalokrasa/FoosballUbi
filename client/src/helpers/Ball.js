
/* TODO: 
    Correlation between velocity direction and animation
    This class could extend Phaser.Physics.Arcade.Sprite class
*/

export default class Ball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        // Keeps track of sprite direction of rotation with respect to ball velocity direction 
        //this.initSpriteOrientationDeg = 270;  // Phaser.Math.DegToRad()

        // Enables physics for this body
        scene.physics.world.enable(this);
        
        // Ball physics params configuration
        this.body.setCircle(32).setBounce(1, 1).setCollideWorldBounds(true);
        this.body.onWorldBounds = true;
        this.scene.physics.world.on('worldbounds', ()=> {
            // TODO: Create scoring logic
            console.log("GOAL!!!");
        })
        

        // Collision with borders
        this.physicsBounds = scene.physics.add.staticGroup();
        this.physicsBounds.add(scene.add.rectangle(0, 0, 50, 295).setOrigin(0, 0));
        this.physicsBounds.add(scene.add.rectangle(0, 0, 1920, 40).setOrigin(0, 0));
        this.physicsBounds.add(scene.add.rectangle(1870, 0, 50, 295).setOrigin(0, 0));
        this.physicsBounds.add(scene.add.rectangle(0, 1080, 50, 310).setOrigin(0, 1));
        this.physicsBounds.add(scene.add.rectangle(0, 1080, 1920, 40).setOrigin(0, 1));
        this.physicsBounds.add(scene.add.rectangle(1920, 1080, 50, 310).setOrigin(1, 1));
        this.scene.physics.add.collider(this, this.physicsBounds);
    }

    start(initXVel, initYVel) {
        // Sets initial velocity
        this.body.setVelocity(initXVel, initYVel);
        // Starts animation
        this.anims.play("ballRoll");
    }

}

Phaser.GameObjects.GameObjectFactory.register('ball', function (x, y, texture) {
    const ball = new Ball(this.scene, x, y, texture);

    this.displayList.add(ball);
    this.updateList.add(ball);

    return ball;
});