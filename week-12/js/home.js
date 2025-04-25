import { app } from "./app.js";

async function getDreams() {
  const dreamsDocs = await getDocs;
}

async function addNewDream(e) {
  e.preventDefault();

  const dreamTextValue = dreamTextRef.value;

  const newDream = await addDocA(dreamsCollection, { text: dreamTextValue });

  console.log(newDream);
}

dreamFormRef.onsubmit = addNewDream;

async function addNewDream(e) {
  e.preventDefault();

  const dreamTextValue = dreamTextRef.value;

  if (dreamTextValue.trim() === "") {
    alert("Please enter a valid dream");
  } else {
    const newDream = await addDoc(dreamsCollection, { text: dreamTextValue });

    console.log(newDream);

    getDreams();

    dreamFormRef.reset();
  }
}
