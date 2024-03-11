const turtles = [
    new Turtle('Ferencz', ['Burgundy']), 
    new Turtle('Bradut', ['White', 'Black']),
    new Turtle('Steely', ['Red', 'Blue']),
    new Turtle('Wolfy', ['Red', 'White']),
];


for (let round = 1; round <= 5; round++) {
    console.log('');
    console.log(`ROUND ${round} STARTS`);
    turtles.forEach(turtle => turtle.move());
}

console.log('');
console.log('=== RESULTS ===');
turtles
    .sort((a, b) => b.distance - a.distance)
    .forEach(t => console.log(t))