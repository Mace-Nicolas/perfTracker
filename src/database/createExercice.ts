import { database } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { capitalizeFirstLetter } from "../utils/functions";

export const createExerciceToDB = async (
  email: string,
  typeOfExercice: string,
  exercice: string,
  forOption: string,
  forTarget: any,
  timeResult: any,
  date: any
) => {
  // exercices/cardio/run/byDistance/1600/time/userEmail/randomId
  // {result: [{date: 06/05/2022, result: 9.58},...]}
  // Convert from HH:MM:SS to int like 9.89 for db and chart, then will be converted back again for display

  const formattedDate = new Date(date).toLocaleString("fr-FR");

  const collectionRef = collection(
    database,
    "exercices",
    typeOfExercice.toLowerCase(),
    exercice.toLowerCase(),
    `by${capitalizeFirstLetter(forOption)}`,
    forTarget,
    forOption,
    email
  );

  const exerciceRef = await getDocs(collectionRef);
  const exercicesDocs = exerciceRef.docs;

  if (exercicesDocs.length > 0) {
    const firstRecord = exercicesDocs[0].id;
    const firstRecordRef = doc(collectionRef, firstRecord);

    const firstRecordData = (await getDoc(firstRecordRef)).data();
    if (firstRecordData) {
      await setDoc(doc(collectionRef, firstRecord), {
        results: [
          ...firstRecordData.result,
          {
            date: formattedDate,
            result: timeResult,
          },
        ],
      });
    }
  } else {
    await addDoc(collectionRef, {
      result: [{ date: "13/05/2022", result: 9.58 }],
    });
  }
};
