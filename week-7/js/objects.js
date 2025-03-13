console.log("Objects 'R Us");

// Ctrl = /
const myObj = {};

const person = {
    //properties
    name: "Kyle with an extra e",
    age: 778,
    vision: "sometimes",
    canDevourSouls: "only on Wednesdays",

    //methods
    sayHello() {
        console.log("Howdy");
    },
};

console.log(person.name);

person.sayHello();

function whatDoesTheFoxSay() {
    console.log("YIP YIP YIP YIP YIP!");
}

whatDoesTheFoxSay();