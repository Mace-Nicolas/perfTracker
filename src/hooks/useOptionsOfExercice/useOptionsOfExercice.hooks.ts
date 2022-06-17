import React, { useState, useEffect } from "react";

import { cardioExercices } from "../../data/exercices/cardio";
import { gymExercices } from "../../data/exercices/gym";
import { weightliftingExercices } from "../../data/exercices/weightlifting";
import { accessoryExercices } from "../../data/exercices/accessories";
import { wods } from "../../data/exercices/wod";
import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";

export const useOptionsOfExercices = () => {
  const [optionsOfExercices, setOptionsOfExercices] = useState(cardioExercices);
  const {
    state: { typeOfExercice },
  } = useTypeOfExercice();

  useEffect(() => {
    switch (typeOfExercice) {
      case "cardio":
        return setOptionsOfExercices(cardioExercices);
      case "gym":
        return setOptionsOfExercices(gymExercices);
      case "wod":
        return setOptionsOfExercices(wods);
      case "weightlifting":
        return setOptionsOfExercices(weightliftingExercices);
      case "accessory":
        return setOptionsOfExercices(accessoryExercices);
    }
  }, [typeOfExercice]);

  return optionsOfExercices;
};
