import React, { useState } from "react";
import BasicDatePicker from "../../basicDatePicker/basicDatePicker.component";
import { useAccountInfo } from "../../context/accountInfos/accountInfo-context";
import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";
import { setTypeOfExercice } from "../../context/typeOfExercice/typeOfExerciceActions";
import { cardioExercices } from "../../data/exercices/cardio";
import { createExerciceToDB } from "../../database/createExercice";
import { useForOptions } from "../../hooks/useForOptions/useForOptions.hooks";
import { useOptionsOfExercices } from "../../hooks/useOptionsOfExercice/useOptionsOfExercice.hooks";
import { capitalizeFirstLetter } from "../../utils/functions";
import { AddButton, CancelButton } from "../buttons/buttons.component";
import { FlexContainer } from "../containers/containers.component";
import ExerciceInput from "../exerciceInput/exerciceInput.component";

import { InputAddForm, SelectAddForm } from "../inputs/inputs.component";
import TimeInputsContainer from "../timeInputsContainer/timeInputsContainer.component";

const typeOfExercices = [
  { name: "Cardio" },
  { name: "Gym" },
  { name: "Weightlifting" },
  { name: "Accessory" },
  { name: "Wod" },
];

const AddResultForm = ({ onCancel }: { onCancel: () => void }) => {
  const [exercice, setExercice] = useState(cardioExercices[0].name);
  const [forOption, setForOption] = useState("time");
  const [forTarget, setForTarget] = useState(0);
  const [date, setDate] = useState(new Date());
  const {
    state: { email },
  } = useAccountInfo();

  const [timeResult, setTimeResult] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const {
    state: { typeOfExercice },
    dispatch,
  } = useTypeOfExercice();

  const forOptions = useForOptions(exercice);
  const optionsExercice = useOptionsOfExercices();

  const handleAddResultSubmit = async (e: any) => {
    e.preventDefault();
    await createExerciceToDB(
      email,
      typeOfExercice,
      exercice,
      forOption,
      forTarget,
      timeResult,
      date
    );
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleAddResultSubmit}>
      <FlexContainer width='100%'>
        <FlexContainer className='my-10' width='100%' flex='row'>
          <ExerciceInput
            value={typeOfExercice}
            label='Type of exercice'
            options={typeOfExercices}
            handleChange={(e: any, value: any) => {
              value && setTypeOfExercice(dispatch, value?.toLowerCase());
            }}
          />
          <CancelButton title='Cancel' onClick={onCancel} />
        </FlexContainer>
        <FlexContainer className='items-center'>
          <ExerciceInput
            label='Exercice'
            options={optionsExercice}
            handleChange={(e: any, value: any) =>
              setExercice(value.toLowerCase())
            }
          />
          <FlexContainer flex='row' className='my-10'>
            <SelectAddForm
              value={forOption}
              onChange={(e: any) => setForOption(e.target.value)}
              label='For ( Time / Distance... )'
              classNames='w-full '
              options={forOptions ?? ["time"]}
            />

            <InputAddForm
              name='for'
              label={capitalizeFirstLetter(forOption)}
              type='number'
              onChange={(e: any) => setForTarget(e.target.value)}
              value={forTarget}
            />
          </FlexContainer>
          <TimeInputsContainer
            hours={timeResult.hours}
            minutes={timeResult.minutes}
            seconds={timeResult.seconds}
            onHoursChange={(e: any) =>
              setTimeResult({ ...timeResult, hours: e.target.value })
            }
            onMinutesChange={(e: any) =>
              setTimeResult({ ...timeResult, minutes: e.target.value })
            }
            onSecondsChange={(e: any) =>
              setTimeResult({ ...timeResult, seconds: e.target.value })
            }
          />
        </FlexContainer>
        <FlexContainer className='my-10 items-center'>
          <BasicDatePicker
            date={date}
            setDate={(e: any) => setDate(e.target.value)}
          />
        </FlexContainer>

        <FlexContainer className='mt-10  items-center'>
          <AddButton width='200px' height='50px' title='Add Result' />
        </FlexContainer>
      </FlexContainer>
    </form>
  );
};

export default AddResultForm;
