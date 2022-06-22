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
import { formatDate, formatTimeResult } from "./timeFormatting";

export const addExerciceToDB = async (
  collectionRef: any,
  formattedDate: any,
  result: any
) => {
  const exerciceRef = await getDocs(collectionRef);
  const exercicesDocs = exerciceRef.docs;

  if (exercicesDocs.length > 0) {
    const firstRecord = exercicesDocs[0].id;
    const firstRecordRef = doc(collectionRef, firstRecord);
    const firstRecordData = (await getDoc(firstRecordRef)).data();
    await setDoc(doc(collectionRef, firstRecord), {
      results: [
        ...firstRecordData?.results,
        {
          date: formattedDate,
          result,
        },
      ],
    });
  } else {
    await addDoc(collectionRef, {
      results: [{ date: formattedDate, result }],
    });
  }
};

export const formatExerciceForDB = async (
  email: string,
  typeOfExercice: string,
  exercice: string,
  forOption: string,
  forTarget: string,
  timeResult: { hours: string; minutes: string; seconds: string },
  repResult: string,
  weightResult: string,
  distanceResult: string,
  date: Date
) => {
  const formattedDate = formatDate(date);

  let result;
  let resultType = "";

  if (exercice === "du") {
    if (forOption === "time ") {
      result = parseInt(repResult);
      resultType = "rep";
    } else if (forOption === "rep") {
      result = formatTimeResult(timeResult);
      resultType = "time";
    }
  }

  const collectionRef = collection(
    database,
    "exercices",
    typeOfExercice.toLowerCase(),
    exercice.toLowerCase(),
    `by${capitalizeFirstLetter(forOption)}`,
    forTarget.toString(),
    resultType,
    email
  );

  await addExerciceToDB(collectionRef, formattedDate, result);
};
