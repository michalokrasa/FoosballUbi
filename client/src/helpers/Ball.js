
/* TODO: 
    Correlation between velocity direction and animation
    This class could extend Phaser.Physics.Arcade.Sprite class
*/

export default class Ball {
    constructor(scene, x, y) {
        // Keeps track of sprite direction of rotation with respect to ball velocity direction 
        this.initSpriteOrientationDeg = 270;  // Phaser.Math.DegToRad()

        // Ball physics object configuration
        this.physicsObject = scene.physics.add.sprite(x, y, 'ball');
        this.physicsObject.setCircle(32);
        this.physicsObject.setBounce(1, 1);
        this.physicsObject.setCollideWorldBounds(true);
        this.physicsObject.body.onWorldBounds = true;
        scene.physics.world.on('worldbounds', ()=> {
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
        scene.physics.add.collider(this.physicsObject, this.physicsBounds);

        //this.physicsObject.body.setBoundsRectangle(new Phaser.Geom.Rectangle(50, 40, 1820, 1000));
        //scene.add.graphics().lineStyle(5, 0x00ffff, 0.5).strokeRectShape(this.physicsObject.body.customBoundsRectangle);
    }

    start(initXVel, initYVel) {
        // Sets initial velocity
        this.physicsObject.setVelocity(initXVel, initYVel);
        // Starts animation
        this.physicsObject.anims.play("ballRoll");
    }

}