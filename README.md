Classic Arcade Game, Udacity Project.
Luis Madrid, 07/21/2018

HOW TO LOAD THE GAME:
To download or clone the repository access the link below (disclaimer: certain files come from Udacity instructor Richard Kalehoff github page):
https://github.com/Luis1Madrid/frontend-nanodegree-arcade-game

In order to play the game, load the file called "index.html" into your browser. The game should load automatically from there. With the use of the arrows on the keyboard the user can control the player.

For game engine and mechanics, access the following files:
  - engine.js (provided by Udacity to facilitate the project)
  - app.js (which has all JavaScript for interactions and set of rules within the game)

GAME OBJECTIVE;
The purpose of the game is to take the player using the arrows on the keyboard to the water region of the map (represented by blue field regions). Be careful with the insect running from left to right, if the player collides with the insect, the player will restart at initial position.

Once the player reaches the water, it will take about 1 sec for a popup window congratulating the player, and ask if he/she would like to play again. Pressing the button will remove the popup window allowing the player to continue playing.

CODE:
The use of JavaScript and images are use to represent the game. Within JavaScript, the developer will find Class objects for Player and Enemy. Within then are multiple parameters and methods called (velocity, image representing the object, x and y coordinate system, among other useful data).

Within the code, later on player, enemy1, enemy2 and enemy3 are declared as variable. If the developer would like to include additional enemies, use the New Enemy(x,y) object to declare additional enemies. X and Y should be numbers within off screen locations.
