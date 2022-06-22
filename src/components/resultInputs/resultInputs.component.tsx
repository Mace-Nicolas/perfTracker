import React from "react";
import { capitalizeFirstLetter } from "../../utils/functions";
import { handleOnInputChange } from "../addResultForm/formEventHandlers";
import { InputAddForm } from "../inputs/inputs.component";
import TimeInputsContainer from "../timeInputsContainer/timeInputsContainer.component";

type SetState = (e: React.SyntheticEvent) => void;

interface ForTargetProps {
  exercice: string;
  forOption: string;
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
  repResult,
  setRepResult,
  handleTimeChange,
}: ForTargetProps) => {
  const { onHoursChange, onMinutesChange, onSecondsChange } = handleTimeChange;

  if (forOption === "distance") {
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
  } else if (exercice === "du") {
    if (forOption === "time") {
      return (
        <InputAddForm
          name='for'
          label='Rep'
          type='text'
          placeholder='85'
          onChange={(e: React.SyntheticEvent) =>
            handleOnInputChange(e, setRepResult)
          }
          value={repResult}
        />
      );
    } else if (forOption === "rep") {
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
    }
  }

  return null;
};

export default ResultInputs;
