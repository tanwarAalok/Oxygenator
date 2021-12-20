var countSun = 0;
var countSun2 = 0;
var countCo = 0;
var countCo2 = 0;
var countCross = 0;
var countCross2 = 0;

var countSun_l2 = 0;
var countSun2_l2 = 0;
var countCo_l2 = 0;
var countCo2_l2 = 0;
var countCross_l2 = 0;
var countCross2_l2 = 0;

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

function resetPosition_l2D(object) {
  object.y = 0;
  var randomX = Phaser.Math.Between(0, config.width);
  object.x = randomX;
}

function moveObject_l2D(object, speed) {
  object.y += speed;
  if (object.y > config.height / 2 + 100) {
    this.resetPosition_l2D(object);
  }
}

function resetPosition_l2(object) {
  object.y = config.height;
  var randomX = Phaser.Math.Between(0, config.width);
  object.x = randomX;
}

function moveObject_l2(object, speed) {
  object.y -= speed;
  if (object.y < config.height / 2 + 90) {
    this.resetPosition_l2(object);
  }
}

function scoreSun(player, sun) {
    score += 5;
    scoreText.setText(`Score: ${score}`);
    sun.disableBody(true, true);
    countSun++;
}
function scoreSun2(player, sun) {
    score += 5;
    scoreText.setText(`Score: ${score}`);
    sun.disableBody(true, true);
    countSun2++;
}

function scoreCo(player, co) {
    score += 5;
    scoreText.setText(`Score: ${score}`);
    co.disableBody(true, true);
    countCo++;
}

function scoreCo2(player, co) {
    score += 5;
    scoreText.setText(`Score: ${score}`);
    co.disableBody(true, true);
    countCo2++;
}

function lifeLeft(player, cross) {
    life -= 1;
    lifeText.setText(`Life: ${life}`);
    cross.disableBody(true, true);
    countCross++;
}

function lifeLeft2(player, cross) {
    life -= 1;
    lifeText.setText(`Life: ${life}`);
    cross.disableBody(true, true);
    countCross2++;
}

function scoreSun_l2(player, sun) {
  score += 5;
  scoreText.setText(`Score: ${score}`);
  sun.disableBody(true, true);
  countSun_l2++;
}
function scoreSun2_l2(player, sun) {
  score += 5;
  scoreText.setText(`Score: ${score}`);
  sun.disableBody(true, true);
  countSun2_l2++;
}

function scoreCo_l2(player, co) {
  score += 5;
  scoreText.setText(`Score: ${score}`);
  co.disableBody(true, true);
  countCo_l2++;
}

function scoreCo2_l2(player, co) {
  score += 5;
  scoreText.setText(`Score: ${score}`);
  co.disableBody(true, true);
  countCo2_l2++;
}

function lifeLeft_l2(player, cross) {
  life -= 1;
  lifeText.setText(`Life: ${life}`);
  cross.disableBody(true, true);
  countCross_l2++;
}

function lifeLeft2_l2(player, cross) {
  life -= 1;
  lifeText.setText(`Life: ${life}`);
  cross.disableBody(true, true);
  countCross2_l2++;
}


// ! ************************************************************



var GameOver = new Phaser.Class({
  Extends: Phaser.Scene,
  
  initialize:
  
  function GameOver() {
    Phaser.Scene.call(this, { key: "gameOver" });
    },
  
  
  preload: function () {
      this.load.image("end", "asset/end.png");

  },
  
  create: function () {
          this.add
            .image(config.width / 2, config.height / 2, "end")
            .setScale(0.6);

    
    
    this.add.text(config.width / 2 - 210, config.height / 2 + 137, `${score}`, {
      fontSize: "100px",
      color: "#DDDDDD",
    });
    
  },
  
})

// ! ************************************************************


var Start = new Phaser.Class({
    Extends: Phaser.Scene,

    intitialize:

        function Start() {
            Phaser.Scene.call(this, { key: 'start' });
    },
    

  preload: function () {
        this.load.image("front", "asset/front page.png");
        
 },
    
  create: function () {
      
    this.add.image(config.width / 2, config.height / 2, 'front').setScale(0.58);
    

    // this.add.text(config.width / 2 - 200, config.height / 2 - 100, "Oxygenator", { 'fontSize': '100px', fill: '#f1eeff', 'fontFamily': 'Arial' });
    
    var text = this.add.text(config.width / 2 - 365, config.height / 2 + 95, "Start", { 'fontSize': '38px', fill: '#fff' });


        text.setInteractive();
        text.on('pointerdown', function () {
            this.scene.start("play");
        }, this);

        
        var text2 = this.add.text(config.width - 353 , config.height / 2 + 96, "Help", { 'fontSize': '38px', fill: '#fff' });
        
        
        text2.setInteractive();
        text2.on('pointerdown', function () {
          this.scene.start("play");
        }, this)
        
        
  },

});


// ! ************************************************************


var Play = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

        function Play() {
            Phaser.Scene.call(this, { key: 'play' });
        },
    
    preload: function () {
        this.load.image("tree", "asset/tree.png");
        this.load.image("ground", "asset/platform.png");
        this.load.image("co", "asset/co.png");
        this.load.image("sun", "asset/sun.png");
      this.load.image("cross", "asset/cross.png");
      this.load.image("background", "asset/background.jpg");
    },

    create: function() {
      this.add.image(config.width / 2, config.height / 2, "background").setScale(1.2);
      player = this.physics.add.image(config.width / 2, config.height, "tree");
      

        // change the size of the player
        player.setScale(0.8);

        scoreText = this.add.text(16, 16, `Score: ${score}`, {
            fontSize: "32px",
            fill: "#000",
        });

        lifeText = this.add.text(config.width - 200, 16, `Life: ${life}`, {
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

    },

  update: function () {
      
    if (score >= 50) {
        this.scene.start("level2");
    }

    if (life <= 0){
        this.scene.start("gameOver");
    }
        


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
       
});


// ! ************************************************************

var Level2 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Level2() {
    Phaser.Scene.call(this, { key: "level2" });
  },

  preload: function () {
    this.load.image("tree", "asset/tree.png");
    this.load.image("ground", "asset/platform.png");
    this.load.image("co", "asset/co.png");
    this.load.image("sun", "asset/sun.png");
    this.load.image("cross", "asset/cross.png");
    this.load.image("platform", "asset/platform.png");
    this.load.image("no", "asset/n2o.png");
    this.load.image("pollu", "asset/pollution.png");
    this.load.image("h2", "asset/h2.png");
      this.load.image("background", "asset/background.jpg");

  },

  create: function () {

    this.add
      .image(config.width / 2, config.height / 2, "background")
      .setScale(1.2);

      
    player = this.physics.add.image(config.width/2, config.height / 2 , "tree");
    platform = this.physics.add.staticGroup();
    platform.create(0, config.height / 2 + 100, "platform");
    platform.create(300, config.height / 2 + 100, "platform");
    platform.create(config.width / 2, config.height / 2 + 100, "platform");
    platform.create(config.width / 2 + 300, config.height / 2 + 100, "platform");
    platform.create(config.width, config.height / 2 + 100, "platform");
      

    player.setScale(0.6);
    
    this.physics.add.collider(player, platform);  

    scoreText = this.add.text(16, 16, `score: ${score}`, {
      fontSize: "32px",
      fill: "#000",
    });

    lifeText = this.add.text(16, 50, `life: ${life}`, {
      fontSize: "32px",
      fill: "#000",
    });


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
      

    foodSun.setScale(0.7);
    foodSun2.setScale(0.7);
    foodCo.setScale(0.7);
    foodCo2.setScale(0.7);
    cross2.setScale(0.7);
    cross.setScale(0.7);
      
// ***************************************************************************

        foodSun_l2 = this.physics.add.image(500, 0, "h2");
        foodCo_l2 = this.physics.add.image(300, 0, "no");
        cross_l2 = this.physics.add.image(100, 0, "pollu");

        foodSun2_l2 = this.physics.add.image(900, 0, "h2");
        foodCo2_l2 = this.physics.add.image(1000, 0, "no");
        cross2_l2 = this.physics.add.image(900, 0, "pollu");

        foodSun_l2.body.allowGravity = false;
        foodCo_l2.body.allowGravity = false;
        cross_l2.body.allowGravity = false;

        foodSun2_l2.body.allowGravity = false;
        foodCo2_l2.body.allowGravity = false;
      cross2_l2.body.allowGravity = false;
      

      foodSun_l2.setScale(0.7);
      foodSun2_l2.setScale(0.7);
      foodCo_l2.setScale(0.7);
      foodCo2_l2.setScale(0.7);
      cross2_l2.setScale(0.7);
      cross_l2.setScale(0.7);

    player.body.setCollideWorldBounds(true);

    //Gravity
    player.body.setGravityY(80);

    cursor = this.input.keyboard.createCursorKeys();
  },

  update: function () {

      if (life <= 0) {
        this.scene.start("gameOver");
      }

    moveObject_l2D(foodSun, 2);
    moveObject_l2D(cross, 2);
    moveObject_l2D(foodCo, 2);

    moveObject_l2D(foodSun2, 2);
    moveObject_l2D(cross2, 3);
    moveObject_l2D(foodCo2, 2);

    moveObject_l2(foodSun_l2, 2);
    moveObject_l2(cross_l2, 2);
    moveObject_l2(foodCo_l2, 2);

    moveObject_l2(foodSun2_l2, 2);
    moveObject_l2(cross2_l2, 3);
    moveObject_l2(foodCo2_l2, 2);

    this.physics.add.collider(player, foodSun, scoreSun);
    this.physics.add.collider(player, foodSun2, scoreSun2);
    this.physics.add.collider(player, foodCo, scoreCo);
    this.physics.add.collider(player, foodCo2, scoreCo2);
    this.physics.add.collider(player, cross2, lifeLeft2);
    this.physics.add.collider(player, cross, lifeLeft);

    this.physics.add.collider(player, foodSun_l2, scoreSun_l2);
    this.physics.add.collider(player, foodSun2_l2, scoreSun2_l2);
    this.physics.add.collider(player, foodCo_l2, scoreCo_l2);
    this.physics.add.collider(player, foodCo2_l2, scoreCo2_l2);
    this.physics.add.collider(player, cross2_l2, lifeLeft2_l2);
    this.physics.add.collider(player, cross_l2, lifeLeft_l2);

    //********************************************************************************* */

    if (countSun > 0) {
      foodSun = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "sun"
      );
        foodSun.body.allowGravity = false;
        foodSun.setScale(0.7);
      countSun--;
    }

    if (countCo > 0) {
      foodCo = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "co"
      );
        foodCo.body.allowGravity = false;
        foodCo.setScale(0.7);
      countCo--;
    }

    if (countCross > 0) {
      cross = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "cross"
      );
        cross.body.allowGravity = false;
        cross.setScale(0.7);
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
        foodSun2.setScale(0.7);
      countSun2--;
    }

    if (countCo2 > 0) {
      foodCo2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "co"
      );
        foodCo2.body.allowGravity = false;
        foodCo2.setScale(0.7);
      countCo2--;
    }

    if (countCross2 > 0) {
      cross2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "cross"
      );
        cross2.body.allowGravity = false;
        cross2.setScale(0.7);
      countCross2--;
    }

    //********************************************************************************* */

    if (countSun_l2 > 0) {
      foodSun_l2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "h2"
      );
        foodSun_l2.body.allowGravity = false;
        foodSun_l2.setScale(0.7);
      countSun_l2--;
    }

    if (countCo_l2 > 0) {
      foodCo_l2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "no"
      );
        foodCo_l2.body.allowGravity = false;
        foodCo_l2.setScale(0.7);
      countCo_l2--;
    }

    if (countCross_l2 > 0) {
      cross_l2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "pollu"
      );
        cross_l2.body.allowGravity = false;
        cross_l2.setScale(0.7);
      countCross_l2--;
    }

    //********************************************************************************* */

    if (countSun2_l2 > 0) {
      foodSun2_l2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "h2"
      );
        foodSun2_l2.body.allowGravity = false;
        foodSun2_l2.setScale(0.7);
      countSun2_l2--;
    }

    if (countCo2_l2 > 0) {
      foodCo2_l2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "no"
      );
        foodCo2_l2.body.allowGravity = false;
        foodCo2_l2.setScale(0.7);
      countCo2_l2--;
    }

    if (countCross2_l2 > 0) {
      cross2_l2 = this.physics.add.image(
        Phaser.Math.Between(0, config.width),
        0,
        "pollu"
      );
        cross2_l2.body.allowGravity = false;
        cross2_l2.setScale(0.7);
      countCross2_l2--;
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
  },
});


// ! ************************************************************


var config = {
  type: Phaser.AUTO,
  width: 1300,
  height: 720,
  backgroundColor: 0x27ae60,

  // physics comes here
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 800 },
      debug: false,
    },
  },
  scene: [Start, Play, Level2, GameOver]
//   scene: {
//     preload: preload,
//     create: create,
//     update: update,
//   },
};

var game = new Phaser.Game(config);
var platform;
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

