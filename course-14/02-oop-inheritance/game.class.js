class Game {

    constructor(rounds){
        this.players = [];
        this.currentRound = 0;
        this.rounds = rounds;
    }


    addPlayer(newPlayer){
        console.log('');
        console.log(`A new player enters the game`);
        newPlayer.greet();
        this.players.push(newPlayer);
    }


    newRound(){
        console.log('');
        console.log(`ROUND ${this.currentRound} STARTS`);
        this.players.forEach(p => p.move());
    }


    playGame(){
        for (this.currentRound = 1; this.currentRound <= this.rounds; this.currentRound++) {
            this.newRound();
        }
    }

    
    showResults(){
        console.log('');
        console.log('=== SCOREBOARD ===');
        this.players
            .sort((a, b) => b.distance - a.distance)
            .forEach(t => console.log(t))
    }

}