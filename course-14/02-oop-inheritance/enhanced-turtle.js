class EnhancedTurtle extends Turtle{

    constructor(name, colors, avatar){
        super(name, colors);
        this.avatar = avatar;
    }

    taunt(){
        if(this.colors.length > 1){
            console.log(`The most beautiful colors are: ${this.getColorScheme()}`);    
        }
        else {
            console.log(`The most beautiful color is: ${this.getColorScheme()}`);
        }
    }


    move(){
        const moveDistance = Math.floor(Math.random() * 21);
        this.distance += moveDistance;
        console.log(`${this.name} moves ${moveDistance} units. The current distance is: ${this.distance}`);
    }
}