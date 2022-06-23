import { useState, useEffect } from "react";
import { typeOfResultsPerExercice } from "../../data/exercices/typesOfResults";
import { removeSpacesAndUpperCases } from "../../database/formattingResultFromDB";

export const useTypeOfResultsPerExercice = (exercice: string) => {
  const [typeOfResults, setTypeOfResults] = useState<any>(
    typeOfResultsPerExercice["run"]
  );

  useEffect(() => {
    for (const key of Object.keys(
      typeOfResultsPerExercice
    ) as (keyof typeof typeOfResultsPerExercice)[]) {
      if (key === removeSpacesAndUpperCases(exercice)) {
        setTypeOfResults(typeOfResultsPerExercice[key]);
      }
    }
  }, [exercice]);
  return { typeOfResults };
};
