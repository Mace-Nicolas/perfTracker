import React, { useState } from "react";
import { useAccountInfo } from "../../context/accountInfos/accountInfo-context";
import { useExerciceData } from "../../context/exerciceData/exerciceData-context";
import { setExerciceResults } from "../../context/exerciceData/exerciceDataActionTypes";
import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";
import { setTypeOfExercice } from "../../context/typeOfExercice/typeOfExerciceActions";
import { getExerciceData } from "../../database/getExercice";
import { useForOptions } from "../../hooks/useForOptions/useForOptions.hooks";
import { useOptionsOfExercices } from "../../hooks/useOptionsOfExercice/useOptionsOfExercice.hooks";
import { capitalizeFirstLetter } from "../../utils/functions";
import { AddButton } from "../buttons/buttons.component";
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

const GetDataForm = ({
  handleSetAddExerciceActive,
}: {
  handleSetAddExerciceActive: () => void;
}) => {
  const [exercice, setExercice] = useState("run");
  const [forOption, setForOption] = useState("time");
  const [forTarget, setForTarget] = useState(0);

  const forOptions = useForOptions(exercice);
  const optionsExercice = useOptionsOfExercices();

  const {
    state: { typeOfExercice },
    dispatch,
  } = useTypeOfExercice();

  const {
    state: { email },
  } = useAccountInfo();

  const useExerciceDataState = useExerciceData();

  const handleSearch = async () => {
    const exerciceData = await getExerciceData({
      email,
      typeOfExercice,
      exercice,
      forOption,
      forTarget,
    });
    setExerciceResults(useExerciceDataState.dispatch, exerciceData);
  };
  return (
    <FlexContainer>
      <FlexContainer flex='row' width='100%'>
        <ExerciceInput
          value={typeOfExercice}
          label='Type of exercice'
          options={typeOfExercices}
          handleChange={(e: React.SyntheticEvent, value: string) => {
            value && setTypeOfExercice(dispatch, value?.toLowerCase());
          }}
        />

        <AddButton title='Add a result' onClick={handleSetAddExerciceActive} />
      </FlexContainer>

      <FlexContainer width='80%' className='mt-10 items-center'>
        <ExerciceInput
          value={exercice}
          label='Exercice'
          options={optionsExercice}
          handleChange={(e: React.SyntheticEvent, value: string) =>
            setExercice(value.toLowerCase())
          }
        />
        <FlexContainer flex='row' className='mt-5'>
          <SelectAddForm
            value={forOption}
            onChange={(e: React.SyntheticEvent) => {
              const target = e.target as typeof e.target & { value: string };
              setForOption(target.value);
            }}
            label='For ( Time / Distance... )'
            classNames='w-full '
            options={forOptions ?? ["time"]}
          />

          <InputAddForm
            name='for'
            label={capitalizeFirstLetter(forOption)}
            type='number'
            onChange={(e: React.SyntheticEvent) => {
              const target = e.target as typeof e.target & { value: number };
              setForTarget(target.value);
            }}
            value={forTarget}
          />
        </FlexContainer>
        <FlexContainer width='150px' className='my-6'>
          <AddButton title='Search' onClick={handleSearch} />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default GetDataForm;
