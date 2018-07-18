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
    // could be implemented for jumping bugs from line to line.
    //let dy = 7;
    this.x += this.dx;

    if(this.x > 500) {
      this.x = -70;
      this.dx = Math.floor(Math.random()*8) + 2;
    }
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
    }
    if (this.y > -40 && this.y < 380 && key == "down") {
      this.y += 82;
    }
    if (this.y < -40 || this.y > 380){
      player.x = 200;
      player.y = 375;
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
    console.log(allowedKeys[e.keyCode]);
});

function fall(){
  player.x = 200;
  player.y = 375;
}
