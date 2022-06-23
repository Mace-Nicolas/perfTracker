import React, { useState } from "react";
import { useTypeOfResultsPerExercice } from "../../hooks/useTypeOfResultsPerExercice/useTypeOfResultsPerExercice.hooks";

import { handleOnInputChange } from "../addResultForm/formEventHandlers";
import { FlexContainer } from "../containers/containers.component";
import { InputAddForm, SelectAddForm } from "../inputs/inputs.component";
import TimeInputsContainer from "../timeInputsContainer/timeInputsContainer.component";

type SetState = (e: React.SyntheticEvent) => void;

interface ResultInputsProps {
  exercice: string;
  forOption: string;
  distanceResult: string;
  setDistanceResult: any;
  calResult: string;
  setCalResult: any;
  weightResult: string;
  setWeightResult: any;
  timeResult: { hours: string; minutes: string; seconds: string };
  repResult: string;
  setRepResult: any;
  handleTimeChange: {
    onHoursChange: SetState;
    onMinutesChange: SetState;
    onSecondsChange: SetState;
  };
}

const ResultInputs = ({
  exercice,
  forOption,
  timeResult,
  distanceResult,
  setDistanceResult,
  calResult,
  setCalResult,
  weightResult,
  setWeightResult,
  repResult,
  setRepResult,
  handleTimeChange,
}: ResultInputsProps) => {
  const { onHoursChange, onMinutesChange, onSecondsChange } = handleTimeChange;
  const { typeOfResults } = useTypeOfResultsPerExercice(exercice);
  const [altTypeOfResult, setAltTypeOfResult] = useState("");
  const associatedInput = typeOfResults[forOption];
  console.log(typeOfResults);

  if (associatedInput === "time") {
    return (
      <TimeInputsContainer
        hours={timeResult.hours}
        minutes={timeResult.minutes}
        seconds={timeResult.seconds}
        onHoursChange={onHoursChange}
        onMinutesChange={onMinutesChange}
        onSecondsChange={onSecondsChange}
      />
    );
  } else if (associatedInput === "distance") {
    return (
      <InputAddForm
        name='for'
        label='Distance'
        type='text'
        placeholder='1600'
        onChange={(e: React.SyntheticEvent) =>
          handleOnInputChange(e, setDistanceResult)
        }
        value={distanceResult}
      />
    );
  } else if (associatedInput === "weight") {
    return (
      <InputAddForm
        className='w-full'
        name='for'
        label='Weight'
        type='text'
        placeholder='150'
        onChange={(e: React.SyntheticEvent) =>
          handleOnInputChange(e, setWeightResult)
        }
        value={weightResult}
      />
    );
  } else if (associatedInput === "rep") {
    return (
      <InputAddForm
        name='for'
        label='Rep'
        type='text'
        placeholder='185'
        onChange={(e: React.SyntheticEvent) =>
          handleOnInputChange(e, setRepResult)
        }
        value={repResult}
      />
    );
  } else if (associatedInput.length > 1) {
    return (
      <FlexContainer width='90%' flex='row'>
        <SelectAddForm
          className='w-full'
          value={altTypeOfResult}
          label='Type of result'
          options={associatedInput}
          onChange={(e: React.SyntheticEvent) =>
            handleOnInputChange(e, setAltTypeOfResult)
          }
        />
        {altTypeOfResult === "distance" && (
          <InputAddForm
            className='w-full'
            name='for'
            label='Distance'
            type='text'
            placeholder='1600'
            onChange={(e: React.SyntheticEvent) =>
              handleOnInputChange(e, setDistanceResult)
            }
            value={distanceResult}
          />
        )}
        {altTypeOfResult === "cal" && (
          <InputAddForm
            className='w-full'
            name='for'
            label='Cal'
            type='text'
            placeholder='150'
            onChange={(e: React.SyntheticEvent) =>
              handleOnInputChange(e, setCalResult)
            }
            value={calResult}
          />
        )}
        {altTypeOfResult === "weight" && (
          <InputAddForm
            className='w-full'
            name='for'
            label='Weight'
            type='text'
            placeholder='150'
            onChange={(e: React.SyntheticEvent) =>
              handleOnInputChange(e, setWeightResult)
            }
            value={weightResult}
          />
        )}
      </FlexContainer>
    );
  }

  return null;
};

export default ResultInputs;
