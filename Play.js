class Play extends Phaser.Scene{
    constructor() {
        super("play");
    };

    var player;
    var score = 0;
    var scoreText;
    var life = 3;
    var foodSun;
    var foodSun2;
    var foodCo;
    var foodCo2;
    var cross2;
    var cross;

    function preload() {
        this.load.image("tree", "asset/tree.png");
        this.load.image("ground", "asset/platform.png");
        this.load.image("co", "asset/co.png");
        this.load.image("sun", "asset/sun.png");
        this.load.image("cross", "asset/cross.png");
    }

    function resetPosition(object) {
        object.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        object.x = randomX;
    }

    function moveObject(object, speed) {
        object.y += speed;
        if (object.y > config.height) {
            this.resetPosition(object);
        }
    }

    function create() {
        player = this.physics.add.image(10, 10, "tree");

        // change the size of the player
        player.setScale(0.8);

        scoreText = this.add.text(16, 16, `score: ${score}`, {
            fontSize: "32px",
            fill: "#000",
        });

        lifeText = this.add.text(16, 50, `life: ${life}`, {
            fontSize: "32px",
            fill: "#000",
        });

        // sun = this.add.image(500, 0, "sun");
        // sun2 = this.add.image(500, 0, "sun");

        foodSun = this.physics.add.image(500, 0, "sun");
        foodCo = this.physics.add.image(300, 0, "co");
        cross = this.physics.add.image(100, 0, "cross");
        
        foodSun2 = this.physics.add.image(900, 0, "sun");
        foodCo2 = this.physics.add.image(1000, 0, "co");
        cross2 = this.physics.add.image(900, 0, "cross");

        foodSun.body.allowGravity = false;
        foodCo.body.allowGravity = false;
        cross.body.allowGravity = false;
        
        foodSun2.body.allowGravity = false;
        foodCo2.body.allowGravity = false;
        cross2.body.allowGravity = false;

        player.body.setCollideWorldBounds(true);

        //Gravity
        player.body.setGravityY(80);

        cursor = this.input.keyboard.createCursorKeys();

    // this.physics.add.overlap(player, sun, scoreCard, null, this);
    }

    var countSun = 0;
    var countSun2 = 0;
    var countCo = 0;
    var countCo2 = 0;
    var countCross = 0;
    var countCross2 = 0;

    function scoreSun(player, sun) {
        score += 5;
        scoreText.setText(`score: ${score}`);
        sun.disableBody(true, true);
        countSun++;
    }
    function scoreSun2(player, sun) {
        score += 5;
        scoreText.setText(`score: ${score}`);
        sun.disableBody(true, true);
        countSun2++;
    }

    function scoreCo(player, co) {
        score += 5;
        scoreText.setText(`score: ${score}`);
        co.disableBody(true, true);
        countCo++;
    }

    function scoreCo2(player, co) {
        score += 5;
        scoreText.setText(`score: ${score}`);
        co.disableBody(true, true);
        countCo2++;
    }

    function lifeLeft(player, cross) {
        life -= 1;
        lifeText.setText(`life: ${life}`);
        cross.disableBody(true, true);
        countCross++;
    }

    function lifeLeft2(player, cross) {
        life -= 1;
        lifeText.setText(`life: ${life}`);
        cross.disableBody(true, true);
        countCross2++;
    }

    function update() {
        moveObject(foodSun, 2);
        moveObject(cross, 2);
        moveObject(foodCo, 2);
        
        moveObject(foodSun2, 2);
        moveObject(cross2, 3);
        moveObject(foodCo2, 2);

        this.physics.add.collider(player, foodSun, scoreSun);
        this.physics.add.collider(player, foodSun2, scoreSun2);
        this.physics.add.collider(player, foodCo, scoreCo);
        this.physics.add.collider(player, foodCo2, scoreCo2);
        this.physics.add.collider(player, cross2, lifeLeft2);
        this.physics.add.collider(player, cross, lifeLeft);

        //********************************************************************************* */

        if (countSun > 0) {
            foodSun = this.physics.add.image(
            Phaser.Math.Between(0, config.width),
            0,
            "sun"
            );
            foodSun.body.allowGravity = false;
            countSun--;
        }

        if (countCo > 0) {
            foodCo = this.physics.add.image(
            Phaser.Math.Between(0, config.width),
            0,
            "co"
            );
            foodCo.body.allowGravity = false;
            countCo--;
        }

        if (countCross > 0) {
            cross = this.physics.add.image(
            Phaser.Math.Between(0, config.width),
            0,
            "cross"
            );
            cross.body.allowGravity = false;
            countCross--;
        }

        //********************************************************************************* */

        if (countSun2 > 0) {
            foodSun2 = this.physics.add.image(
            Phaser.Math.Between(0, config.width),
            0,
            "sun"
            );
            foodSun2.body.allowGravity = false;
            countSun2--;
        }

        if (countCo2 > 0) {
            foodCo2 = this.physics.add.image(
            Phaser.Math.Between(0, config.width),
            0,
            "co"
            );
            foodCo2.body.allowGravity = false;
            countCo2--;
        }

        if (countCross2 > 0) {
            cross2 = this.physics.add.image(
            Phaser.Math.Between(0, config.width),
            0,
            "cross"
            );
            cross2.body.allowGravity = false;
            countCross2--;
        }

        //********************************************************************************* */


        if (cursor.left.isDown) {
            player.setVelocityX(-380);
        }

        if (cursor.right.isDown) {
            player.setVelocityX(380);
        }

        if (cursor.left.isUp && cursor.right.isUp) {
            player.setVelocityX(0);
        }
    }

}