import Phaser from "phaser";
import MainScreen from  "./scenes/mainScreen"

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        MainScreen
    ]
};

const game = new Phaser.Game(config);