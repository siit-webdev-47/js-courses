class Turtle {

    constructor(name, colors) {
        this.name = name;
        this.colors = colors;
        this.distance = 0;
    }

    greet() {
        console.log(`Hi! My name is ${this.name} and my colors are: ${this.getColorScheme()}`);
    }


    cheer() {
        console.log(`${this.getColorScheme()} for the win!!!!`);
    }


    getColorScheme() {
        // let colorScheme = '';
        // this.colors.forEach((color, i) => colorScheme += i > 0 ? ' | ' + color : color);
        // return colorScheme;
        return this.colors.join(' | ');
    }


    move() {
        const moveDistance = Math.floor(Math.random() * 11);
        this.distance += moveDistance;
        console.log(`${this.name} moves ${moveDistance} units. The current distance is: ${this.distance}`);
    }

}