import { app } from "./app.js";

import {
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.";

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
  const dreamsDoc = await getDocs(dreamsCollection);

  dreamsRef.innerHTML = "";

  for (let i = 0; dreamsDocs.docs.length; i++) {
    const currentDream = dreamsDoc.docs[i];

    const data = currentDream.data();

    dreamsRef.innerHTML += ` 
    <div class="dream">
            <h4>$(data.text)</h4>
            <p>Likes: $(hearts)</p>
            <p>
              <button class="edit">Edit</button>
              <button class="heart" data-id="$(currentDream.id)" data-hearts="$(hearts)">&hearts;</button>
            </p>
        </div>`;
  }

  const heartsRef = document.querySelectorAll(".heart");

  for (let i = 0; i < array.length; i++) {
    heartsRef[i].oneclick = addHeart;
  }
}

async function addHearts(e) {}
