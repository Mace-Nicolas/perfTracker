import React, { useState } from "react";

import { FlexContainer } from "../containers/containers.component";
import { InputAddForm, SelectAddForm } from "../inputs/inputs.component";

import { handleOnInputChange } from "./formEventHandlers";

import { capitalizeFirstLetter } from "../../utils/functions";

interface ForContainerProps {
  exercice: string;
  forOption: string;
  forOptions: string[] | undefined;
  forTarget: string;
  setForOption: React.Dispatch<React.SetStateAction<string>>;
  setForTarget: React.Dispatch<React.SetStateAction<string>>;
}

const ForContainer = ({
  exercice,
  forOption,
  forOptions,
  forTarget,
  setForOption,
  setForTarget,
}: ForContainerProps) => {
  return (
    <FlexContainer flex='row' className='my-10'>
      <SelectAddForm
        value={forOption}
        onChange={(e: React.SyntheticEvent) =>
          handleOnInputChange(e, setForOption)
        }
        label='For ( Time / Distance... )'
        className='w-full '
        options={forOptions ?? ["time"]}
      />

      <InputAddForm
        name='for'
        label={capitalizeFirstLetter(forOption)}
        type='text'
        placeholder={forOption === "distance" ? "1600" : "60"}
        onChange={(e: React.SyntheticEvent) =>
          handleOnInputChange(e, setForTarget)
        }
        value={forTarget}
      />
    </FlexContainer>
  );
};

export default ForContainer;
