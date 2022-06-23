import React from "react";
import toast from "react-hot-toast";

import { setTypeOfExercice } from "../../context/typeOfExercice/typeOfExerciceActions";

import { CancelButton } from "../buttons/buttons.component";
import { FlexContainer } from "../containers/containers.component";

import ExerciceInput from "../exerciceInput/exerciceInput.component";
import ResultInputs from "../resultInputs/resultInputs.component";

import {
  handleAddResultSubmit,
  handleOnTimeResultChange,
} from "./formEventHandlers";
import { typesOfExercice } from "../../data/exercices/typesOfExercice";
import ForContainer from "./forContainer.component";
import AddButtonContainer from "./addButtonContainer.component";
import { useAddFormData } from "../../hooks/useAddFormData/useAddFormData.hooks";

const AddResultForm = ({ onCancel }: { onCancel: () => void }) => {
  const {
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
  } = useAddFormData();

  const resetForms = () => {
    setForOption("time");
    setForTarget("");
    setDate(new Date());
    setRepResult("");
    setWeightResult("");
    setDistanceResult("");
    setTimeResult({ hours: "", minutes: "", seconds: "" });
  };

  const handleAddResultSubmitProps = {
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
  };
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e: React.SyntheticEvent) =>
        handleAddResultSubmit(e, handleAddResultSubmitProps)
      }
    >
      <FlexContainer width='100%'>
        <FlexContainer className='my-10' width='100%' flex='row'>
          <ExerciceInput
            value={typeOfExercice}
            label='Type of exercice'
            options={typesOfExercice}
            handleChange={(e: React.SyntheticEvent, value: string) => {
              value && setTypeOfExercice(dispatch, value?.toLowerCase());
            }}
          />
          <CancelButton title='Close' onClick={onCancel} />
        </FlexContainer>
        <FlexContainer className='items-center'>
          <ExerciceInput
            value={exercice}
            label='Exercice'
            options={optionsExercice}
            handleChange={(e: React.SyntheticEvent, value: string) =>
              value && setExercice(value.toLowerCase())
            }
          />
          <ForContainer
            {...{
              exercice,
              forOption,
              forOptions,
              forTarget,
              setForOption,
              setForTarget,
            }}
          />
          <ResultInputs
            exercice={exercice}
            forOption={forOption}
            distanceResult={distanceResult}
            setDistanceResult={setDistanceResult}
            calResult={calResult}
            setCalResult={setCalResult}
            timeResult={timeResult}
            weightResult={weightResult}
            setWeightResult={setWeightResult}
            repResult={repResult}
            setRepResult={setRepResult}
            handleTimeChange={{
              onHoursChange: (e: React.SyntheticEvent) =>
                handleOnTimeResultChange(e, "hours", timeResult, setTimeResult),

              onMinutesChange: (e: React.SyntheticEvent) =>
                handleOnTimeResultChange(
                  e,
                  "minutes",
                  timeResult,
                  setTimeResult
                ),

              onSecondsChange: (e: React.SyntheticEvent) =>
                handleOnTimeResultChange(
                  e,
                  "seconds",
                  timeResult,
                  setTimeResult
                ),
            }}
          />
        </FlexContainer>
        <AddButtonContainer />
      </FlexContainer>
    </form>
  );
};

export default AddResultForm;
