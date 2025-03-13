const favoriteReptiles = ["Gekko", "Komodo Dragon", "Bearded Dragon"];

console.log(favoriteReptiles);
console.table(favoriteReptiles); 

console.log("First thing:", favoriteReptiles[0]);
console.log("Idk:", favoriteReptiles [4]);
console.log("# of favorite reptiles:", favoriteReptiles.length);

for (let i = 0; i < favoriteReptiles.length; i++) { 
    const reptile = favoriteReptiles[i];
    console.log(reptile); 
}

