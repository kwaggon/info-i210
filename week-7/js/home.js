console.log("Cozy Home")

console.log("2+7=", 2+7)

console.log("My name is " + "Kylee")

if (true) {
    console.log("Always true");
} else {
    console.error("This should never happen");
}

let money = 0.75;

if (money >= 0.5) {
    console.log("You pay for a bus ticket");
    money -= 0.5;
} else if (money >= 0.25) {
    console.log("Catch a ride with a mysterious hat person");
    console.warn("Sounds kinda sketch but you do you queen");
    money -= 0.25;
} else {
    console.log("You're broke, walk home");
    console.warn("It's a 5 hour walk tho ;( ");
}