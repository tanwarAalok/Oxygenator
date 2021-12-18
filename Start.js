class Start extends Phaser.Scene{
    constructor() {
        super("start");
    }


    create() {
        this.add.text(20, 20, "Welcome to the game!");
        this.scene.start('play');
    }
}