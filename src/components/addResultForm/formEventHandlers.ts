import React from "react";
import { formatExerciceForDB } from "../../database/createExercice";

export const handleOnInputChange = (
  e: React.SyntheticEvent,
  setState:
    | React.Dispatch<React.SetStateAction<any>>
    | React.Dispatch<React.SetStateAction<any>>
) => {
  const target = e.target as typeof e.target & { value: string | number };
  target.value && setState(target.value);
};

export const handleOnTimeResultChange = (
  e: React.SyntheticEvent,
  timeProp: string,
  timeResult: { hours: string; minutes: string; seconds: string },
  setTimeResult: React.Dispatch<
    React.SetStateAction<{ hours: string; minutes: string; seconds: string }>
  >
) => {
  const target = e.target as typeof e.target & {
    value: string;
    name: string;
  };
  setTimeResult({
    ...timeResult,
    [timeProp]: parseInt(target.value),
  });
};

export const handleAddResultSubmit = async (
  e: React.SyntheticEvent,
  props: any
) => {
  const {
    email,
    typeOfExercice,
    exercice,
    forOption,
    forTarget,
    timeResult,
    repResult,
    weightResult,
    distanceResult,
    date,
    resetForms,
    toast,
  } = props;

  e.preventDefault();

  try {
    await formatExerciceForDB(
      email,
      typeOfExercice,
      exercice,
      forOption,
      forTarget,
      timeResult,
      repResult,
      weightResult,
      distanceResult,
      date
    );

    resetForms();
    toast.success("Exercice added successfully");
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong, try again later");
  }
};
