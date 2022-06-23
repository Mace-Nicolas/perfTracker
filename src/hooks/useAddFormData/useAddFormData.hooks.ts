import { cardioExercices } from "../../data/exercices/cardio";

import { useState } from "react";
import { useAccountInfo } from "../../context/accountInfos/accountInfo-context";
import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";
import { useForOptions } from "../useForOptions/useForOptions.hooks";
import { useOptionsOfExercices } from "../useOptionsOfExercice/useOptionsOfExercice.hooks";

export const useAddFormData = () => {
  const [exercice, setExercice] = useState(
    cardioExercices[0].name.toLowerCase()
  );
  const [forOption, setForOption] = useState("time");
  const [forTarget, setForTarget] = useState("");
  const [date, setDate] = useState(new Date());

  const [calResult, setCalResult] = useState("");
  const [repResult, setRepResult] = useState("");
  const [weightResult, setWeightResult] = useState("");
  const [distanceResult, setDistanceResult] = useState("");
  const [timeResult, setTimeResult] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  const {
    state: { email },
  } = useAccountInfo();
  const {
    state: { typeOfExercice },
    dispatch,
  } = useTypeOfExercice();

  const forOptions = useForOptions(exercice);
  const optionsExercice = useOptionsOfExercices();

  return {
    exercice,
    setExercice,
    forOption,
    setForOption,
    forTarget,
    setForTarget,
    date,
    setDate,
    email,
    repResult,
    setRepResult,
    weightResult,
    setWeightResult,
    distanceResult,
    setDistanceResult,
    timeResult,
    setTimeResult,
    typeOfExercice,
    dispatch,
    forOptions,
    optionsExercice,
    calResult,
    setCalResult,
  };
};
