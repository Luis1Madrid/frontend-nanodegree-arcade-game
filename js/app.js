/*
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
*/
//ES6 Format Luis Madrid
class Enemy {

  constructor(x, y){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.dx = Math.floor(Math.random()*8) + 2;
  }

  update(dt) {

    this.x += this.dx;

    if(this.x > 500) {
      this.x = -70;
      this.dx = Math.floor(Math.random()*8) + 2;
    }
    checkCollisions();
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Player {
  constructor(x = 200, y = 375){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  }

  update(dt) {
    //console.log(this.y);
    //this.winMessage();
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key) {
    if (this.x > -20 && this.x < 500 && key == "left"){
      this.x -= 100;
    }
    if (this.x > -20 && this.x < 500 && key == "right"){
      this.x += 100;
    }
    if (this.x < 0 || this.x > 450) {
      fall();
    }
    if (this.y > -40 && this.y < 380 && key == "up") {
      this.y -= 82;
      winMessage();
    }
    if (this.y > -40 && this.y < 380 && key == "down") {
      this.y += 82;
    }
    if (this.y < -40 || this.y > 380){
      fall();
    }
  }
}

let player = new Player();
let enemy1 = new Enemy(-70,60);
let enemy2 = new Enemy(-70,140);
let enemy3 = new Enemy(-70,230);
let allEnemies = [enemy1, enemy2, enemy3];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function keys(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    //console.log(allowedKeys[e.keyCode]);
});

function fall(){
  player.x = 200;
  player.y = 375;
}

function checkCollisions() {
  let xPlayer = player.x;
  let yPlayer = player.y;
  for (let enemy of allEnemies) {
      let xEnemy = enemy.x;
      let yEnemy = enemy.y;
      let xEnemyHigh = xEnemy + 65;
      let xEnemyLow = xEnemy - 65;
      let yEnemyHigh = yEnemy + 20;
      let yEnemyLow = yEnemy - 20;
      if(xPlayer > xEnemyLow && xPlayer < xEnemyHigh && yPlayer > yEnemyLow && yPlayer < yEnemyHigh){
        console.log("Clash!")
        player.x = 200;
        player.y = 375;
      }
  }
}

function winMessage() {
    if (player.y < -30){
      setTimeout(function(){
        fall();

        let msg = document.createElement("dialog");
        msg.className = "dialogBox";
        document.body.append(msg);

        let messageCongrats = document.createElement("h2");
        messageCongrats.textContent = "Congratulations finishing the game!";
        messageCongrats.style.font = "italic 1.5em Fira Sans";
        msg.append(messageCongrats);

        msg.style.display = "block";
        msg.style.border = "1px solid #888";
        msg.style.margin = "-40% auto";
      },800);
    }
  }
