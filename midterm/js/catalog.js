//Ref to DOM
const catalogRef = document.querySelector("#catalog");

//Data
const catalogItems = [
  {
    image:
      "https://iu.instructure.com/courses/2298808/files/187209674/preview?instfs=true",
    name: "My First Fire",
  },
  {
    image:
      "https://iu.instructure.com/courses/2298808/files/187209679/preview?instfs=true",
    name: "Handy Hand",
  },
  {
    image:
      "https://iu.instructure.com/courses/2298808/files/187209675/preview?instfs=true",
    name: "NapSack",
  },
  {
    image:
      "https://iu.instructure.com/courses/2298808/files/187209676/preview?instfs=true",
    name: "Hot Tub Wildlife Feeder",
  },
  {
    image:
      "https://iu.instructure.com/courses/2298808/files/187209677/preview?instfs=true",
    name: "Toilet Meadow",
  },
  {
    image:
      "https://iu.instructure.com/courses/2298808/files/187209678/preview?instfs=true",
    name: "Pudding Pouch",
  },
];

catalogRef.innerHTML = "";

for (let i = 0; i < catalogItems.length; i++) {
  const item = catalogItems[i];

  const newArticle = document.createElement("article");
  const newImg = document.createElement("img");
  newImg.src = item.image;
  const newP = "<p>" + item.name + "</p>";

  newArticle.appendChild(newImg);
  newArticle.innerHTML += newP;

  catalogRef.appendChild(newArticle);
}
