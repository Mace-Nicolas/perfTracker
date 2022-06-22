import React from "react";
import { capitalizeFirstLetter } from "../../utils/functions";
import { FlexContainer } from "../containers/containers.component";
import { InputAddForm, SelectAddForm } from "../inputs/inputs.component";
import { handleOnInputChange } from "./formEventHandlers";

interface ForContainerProps {
  forOption: string;
  forOptions: string[] | undefined;
  forTarget: string;
  setForOption: React.Dispatch<React.SetStateAction<string>>;
  setForTarget: React.Dispatch<React.SetStateAction<string>>;
}

const ForContainer = ({
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
        classNames='w-full '
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
