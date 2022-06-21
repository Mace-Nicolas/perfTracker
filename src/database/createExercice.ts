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
import { formatDate, formatResult } from "./timeFormatting";

export const createExerciceToDB = async (
  email: string,
  typeOfExercice: string,
  exercice: string,
  forOption: string,
  forTarget: number,
  timeResult: { hours: number; minutes: number; seconds: number },
  date: Date
) => {
  // exercices/cardio/run/byDistance/1600/time/userEmail/randomId
  // {result: [{date: 06/05/2022, result: 54032},...]}

  const formattedDate = formatDate(date);

  const collectionRef = collection(
    database,
    "exercices",
    typeOfExercice.toLowerCase(),
    exercice.toLowerCase(),
    `by${capitalizeFirstLetter(forOption)}`,
    forTarget.toString(),
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
          ...firstRecordData.results,
          {
            date: formattedDate,
            result: formatResult(timeResult),
          },
        ],
      });
    }
  } else {
    await addDoc(collectionRef, {
      results: [{ date: formattedDate, result: formatResult(timeResult) }],
    });
  }
};
