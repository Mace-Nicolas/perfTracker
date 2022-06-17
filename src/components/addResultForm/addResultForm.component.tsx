import React, { useEffect, useState } from "react";
import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";
import { setTypeOfExercice } from "../../context/typeOfExercice/typeOfExerciceActions";
import { cardioExercices } from "../../data/exercices/cardio";
import { useForOptions } from "../../hooks/useForOptions/useForOptions.hooks";
import { useOptionsOfExercices } from "../../hooks/useOptionsOfExercice/useOptionsOfExercice.hooks";
import { capitalizeFirstLetter } from "../../utils/functions";
import { AddButton, CancelButton } from "../buttons/buttons.component";
import { FlexContainer } from "../containers/containers.component";
import ExerciceInput from "../exerciceInput/exerciceInput.component";

import { InputAddForm, SelectAddForm } from "../inputs/inputs.component";

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
  const [result, setResult] = useState(0);

  const {
    state: { typeOfExercice },
    dispatch,
  } = useTypeOfExercice();

  const forOptions = useForOptions(exercice);
  const optionsExercice = useOptionsOfExercices();

  return (
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
        <FlexContainer flex='row'>
          {/* Use 2 inputs or 3 for hours minutes etc  */}
          <InputAddForm
            label='Result'
            name='for'
            type='text'
            onChange={(e: any) => setResult(e.target.value)}
            value={result}
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer className='mt-10  items-center'>
        <AddButton
          width='200px'
          height='50px'
          title='Add Result'
          onClick={() => console.log("submitting result")}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default AddResultForm;
