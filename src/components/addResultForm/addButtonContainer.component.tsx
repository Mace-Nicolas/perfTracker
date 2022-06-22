import React from "react";
import { AddButton } from "../buttons/buttons.component";
import { FlexContainer } from "../containers/containers.component";

const AddButtonContainer = () => {
  return (
    <FlexContainer className='mt-10  items-center'>
      <AddButton width='200px' height='50px' title='Add Result' />
    </FlexContainer>
  );
};

export default AddButtonContainer;
