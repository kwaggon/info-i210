function attack(enemyDef){
    const dmg = this.atk - enemyDef;
        if (dmg<= 0) {
            return 0;
        } else {
        return dmg;
        }
}
//Objects
const person = {
    //Properties (variables that belong to this object)
    name: "Kyle with an extra E",
    hp: 7,
    def: 1,
    atk: 1,
    spd: 2,

    //Methods (functions that belong to this objects)
    attack: attack,

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
};

const enemy = {
    name: "Slime",
    hp: 5,
    def: 3,
    atk: 1,
    spd: 1,
    
    attack() {
        return this.atk;
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
};

//Kyle E attacks slime
const KyleEDmg = person.attack();
console.log(KyleEDmg);
console.log("Slime HP:", enemy.hp);

enemy.takeDamage(KyleEDmg);
console.log("Slime HP:", enemy.hp);

const characters = [
    { name: "Bob", hp: 2, atk: 1},
    { name: "Henry", hp: 4, atk: 7},
    { name: "Jim", hp: 1, atk: 1},
    { name: "Susan", hp: 5, atk: 3},
];

console.log("First character:", characters[0]);