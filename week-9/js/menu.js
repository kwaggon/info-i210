//References to DOM
const menuRef = document.querySelector("#menu");

//Data
const menuItems = [
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

menuRef.innerHTML = "";

for (let i = 0; i < menuItems.length; i++) {
  const item = menuItems[i];

  const newArticle = document.createElement("article");
  const newImg = document.createElement("img");
  newImg.src = item.image;
  const newP = "<p>" + item.name + "</p>";

  newArticle.appendChild(newImg);
  newArticle.innerHTML += newP;

  menuRef.appendChild(newArticle);
}
