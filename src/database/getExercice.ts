import { database } from "./firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { capitalizeFirstLetter } from "../utils/functions";

import { formatExerciceResFromDB } from "./formattingResultFromDB";

interface getExerciceDataProps {
  email: string;
  typeOfExercice: string;
  exercice: string;
  forOption: string;
  forTarget: string | number;
}

export const getExerciceData = async ({
  email,
  typeOfExercice,
  exercice,
  forOption,
  forTarget,
}: getExerciceDataProps) => {
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
    const formatedData = formatExerciceResFromDB(firstRecordData?.results);
    return formatedData;
  } else {
    // return toast error or null and handle with graph disappearing and messages
  }
};
