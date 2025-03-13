//References to DOM
const lessonRef = document.querySelector("#instruments");

//Data
const lessonType = [
  {
    image:
      "https://images.pexels.com/photos/4725659/pexels-photo-4725659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Berry Pancake",
  },
  {
    image:
      "https://images.pexels.com/photos/574112/pexels-photo-574112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Chocolate Pancake",
  },
  {
    image:
      "https://images.pexels.com/photos/4725643/pexels-photo-4725643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Nutty Crepe",
  },
  {
    image:
      "https://images.pexels.com/photos/4725648/pexels-photo-4725648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Berry Crepe",
  },
  {
    image: "",
    name: "",
  },
  {
    image: "",
    name: "",
  },
];

lessonRef.innerHTML = "";

for (let i = 0; i < lessonType.length; i++) {
  const item = lessonType[i];

  const newUl = document.createElement("ul");
  const newLi = document.createElement("li");
  const newImg = document.createElement("img");
  newImg.src = item.image;
  const newp = "<p>" + item.name + "</p>";

  newUL.appendChild(newImg);
  newUl.innerHTML += newUl;

  lessonRef.appendChild(newUl);
}
