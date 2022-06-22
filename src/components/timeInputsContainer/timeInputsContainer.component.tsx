import React from "react";
import { FlexContainer } from "../containers/containers.component";
import { InputAddForm } from "../inputs/inputs.component";

type TimeProps = {
  onHoursChange: (e: React.SyntheticEvent) => void;
  onMinutesChange: (e: React.SyntheticEvent) => void;
  onSecondsChange: (e: React.SyntheticEvent) => void;
  hours: string;
  minutes: string;
  seconds: string;
};

const TimeInputsContainer = ({
  onHoursChange,
  onMinutesChange,
  onSecondsChange,
  hours,
  minutes,
  seconds,
}: TimeProps) => {
  return (
    <FlexContainer width='40%' flex='row'>
      <InputAddForm
        label='Hours'
        name='for'
        type='text'
        placeholder='HH'
        onChange={onHoursChange}
        value={hours}
      />
      <InputAddForm
        label='Minutes'
        name='for'
        type='text'
        placeholder='MM'
        onChange={onMinutesChange}
        value={minutes}
      />
      <InputAddForm
        label='Seconds'
        name='for'
        type='text'
        placeholder='SS'
        onChange={onSecondsChange}
        value={seconds}
      />
    </FlexContainer>
  );
};

export default TimeInputsContainer;
