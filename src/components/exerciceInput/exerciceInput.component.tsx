import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./exerciceInput.component.styles.scss";
import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";

import { cardioExercices } from "../../data/exercices/cardio";
import { gymExercices } from "../../data/exercices/gym";
import { weightliftingExercices } from "../../data/exercices/weightlifting";
import { accessoryExercices } from "../../data/exercices/accessories";
import { wods } from "../../data/exercices/wod";

const ExerciceInput = () => {
  const [selectedTypeOfExercice, setSelectedTypeOfExercice] =
    useState(cardioExercices);
  const {
    state: { typeOfExercice },
  } = useTypeOfExercice();

  useEffect(() => {
    switch (typeOfExercice) {
      case "cardio":
        return setSelectedTypeOfExercice(cardioExercices);
      case "gym":
        return setSelectedTypeOfExercice(gymExercices);
      case "wod":
        return setSelectedTypeOfExercice(wods);
      case "weightlifting":
        return setSelectedTypeOfExercice(weightliftingExercices);
      case "accessory":
        return setSelectedTypeOfExercice(accessoryExercices);
    }
  }, [typeOfExercice]);

  return (
    <Autocomplete
      disablePortal
      options={selectedTypeOfExercice.map((option) => option.name)}
      // getOptionLabel={(option) => option.name}

      sx={{
        width: "75%",
        background: "#D9D9D9",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
      }}
      renderInput={(params) => <TextField {...params} label='Exercice' />}
    />
  );
};

export default ExerciceInput;
