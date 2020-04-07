import fieldImg from "../assets/field.png"
import arenaImg from "../assets/arena.png"
import stickImg from "../assets/stick.png"
import playerShadowImg from "../assets/playerShadow.png"
import bluePlayerSpr from "../assets/playerBlue.png"
import redPlayerSpr from "../assets/playerRed.png"
import ballSpr from "../assets/ball.png"

import Ball from "../helpers/Ball"


export default class MainScreen extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainScreen'
        });

        this.stickPositions = [110, 360, 600, 840, 1080, 1320, 1560, 1810];
    }

    preload() {
        this.load.image('field', fieldImg);
        this.load.image('arena', arenaImg);
        this.load.image('stick', stickImg);
        this.load.image('playerShadow', playerShadowImg)
        this.load.spritesheet('bluePlayer', bluePlayerSpr, { 
            frameWidth: 100,
            frameHeight: 70,
            endFrame: 3 });
        this.load.spritesheet('redPlayer', redPlayerSpr, {
            frameWidth: 100,
            frameHeight: 70,
            endFrame: 3
        });
        this.load.spritesheet('ball', ballSpr, {
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 6
        });
    }

    create() {
        this.add.image(0, 0, 'field').setOrigin(0, 0);

        this.ball = new Ball(this, 1920 / 2, 1080 / 2);

        this.stickPositions.forEach(pos => {
            this.add.image(pos, 0, 'stick').setOrigin(0.3, 0);
        })

        this.add.image(0, 0, 'arena').setOrigin(0, 0);

        this.anims.create({
            key: 'redKick',
            frames: this.anims.generateFrameNumbers('redPlayer', { start: 0, end: 3, first: 0 }),
            frameRate: 20
        });

        this.anims.create({
            key: 'blueKick',
            frames: this.anims.generateFrameNumbers('bluePlayer', { start: 0, end: 3, first: 0 }),
            frameRate: 20
        });

        this.anims.create({
            key: 'ballRoll',
            frames: this.anims.generateFrameNumbers('ball', { start: 0, end: 6, first: 0 }),
            frameRate: 20,
            repeat: -1
        });

        

        this.ball.start(100, -200);
    }

    update() {
        //console.log(this.ball.PhysicsObject.body.angle);
    }
}