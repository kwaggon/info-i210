console.log("Adventure");

const journeyRef = document.querySelector("#journey");

function startJourney() {
  journeyRef.innerHTML =
    "<p>Congratulations on your acceptance into Elemental Academy. Today is the day you've always dreamed of: The Elemental Ceremony!</p>";

  const powerType = [
    {
      name: "Fire",
      img: "https://images.pexels.com/photos/270815/pexels-photo-270815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Water",
      img: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Earth",
      img: "https://images.pexels.com/photos/1097016/pexels-photo-1097016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Air",
      img: "https://images.pexels.com/photos/29547241/pexels-photo-29547241/free-photo-of-serene-blue-sky-with-soft-cirrus-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  for (let i = 0; i < powerType.length; i++) {
    const power = powerType[i];
    const newSection = document.createElement("section");
    newSection.innerHTML +=
      "<img width='300' src='" + power.img + "' alt='" + power.name + "' />";
    newSection.innerHTML += "<h4>" + power.name + "</h4>";

    newSection.dataset.powerName = power.name;
    newSection.dataset.powerImage = power.img;
    newSection.onclick = choosePower;

    journeyRef.appendChild(newSection);
    console.log(power);
  }
}

function choosePower(e) {
  console.log(e.currentTarget);
  const powerName = e.currentTarget.dataset.powerName;
  const powerImage = e.currentTarget.dataset.powerImage;

  const confirmChoice = confirm(
    "Choose " + powerName + " as your elemental power?"
  );

  if (confirmChoice) {
    journeyRef.innerHTML +=
      "You chose " + powerName + " as your elemental power!";
    myPower = { name: powerName, img: powerImage };
  }
}
