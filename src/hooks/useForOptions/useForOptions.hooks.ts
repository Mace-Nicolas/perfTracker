import React, { useState, useEffect } from "react";

import { cardioExercices } from "../../data/exercices/cardio";
import { gymExercices } from "../../data/exercices/gym";
import { weightliftingExercices } from "../../data/exercices/weightlifting";
import { accessoryExercices } from "../../data/exercices/accessories";
import { wods } from "../../data/exercices/wod";

export const useForOptions = (exerciceName = "run") => {
  const [forOptions, setForOptions] = useState<any>();
  const exercices = [
    ...cardioExercices,
    ...gymExercices,
    ...weightliftingExercices,
    ...accessoryExercices,
    ...wods,
  ];

  useEffect(() => {
    const foundExercice = exercices.find(
      (ex: any) => ex.name.toLowerCase() === exerciceName
    );
    if (foundExercice) {
      setForOptions(foundExercice.forTypes);
    }
  }, [exerciceName]);
  return forOptions;
};
