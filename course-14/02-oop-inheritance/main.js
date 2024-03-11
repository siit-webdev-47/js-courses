console.log('Turtle race'); 

let game = new Game(5);

// adding players
game.addPlayer(new EnhancedTurtle('Ferencz', ['Burgundy'], '🚂'));
game.addPlayer(new EnhancedTurtle('Bradut', ['White', 'Black'], '🎓'));
game.addPlayer(new Turtle('Steely', ['Red', 'Blue']));
game.addPlayer(new Turtle('Wolfy', ['Red', 'White']));

// play the game
game.playGame();

// display the results
game.showResults();