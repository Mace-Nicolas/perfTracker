import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCB921Ya1EmPmym-FgLLcNmXUCuA7q3MCc",
  authDomain: "wod-tr.firebaseapp.com",
  projectId: "wod-tr",
  storageBucket: "wod-tr.appspot.com",
  messagingSenderId: "450593389737",
  appId: "1:450593389737:web:55c0bd0623a830eb15bdb8",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
