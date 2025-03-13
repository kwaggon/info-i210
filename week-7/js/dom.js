const titleRef = document.getElementsById("title");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("items");

console.log(itemsRef);

const altTitleRef = document.querySelector("#title");

console.log("altTitleRef");

const itemsAltRef = document.querySelectorAll(".item");

titleRef.style.backgroundColor = "green";
titleRef.style.color = "00ff00";
titleRef.style.fontSize = "10px";

document.querySelector("body > ul li").style.disyplay = "none";


console.log("first a", firstARef);