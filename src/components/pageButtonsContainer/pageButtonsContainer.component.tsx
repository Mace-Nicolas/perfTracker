import React from "react";
import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";
import { setTypeOfExercice } from "../../context/typeOfExercice/typeOfExerciceActions";
import { CategoryButton } from "../buttons/buttons.component";

import "./pageButtonsContainer.component.styles.scss";

const PageButtonsContainer = () => {
  const {
    state: { typeOfExercice },
    dispatch,
  } = useTypeOfExercice();

  return (
    <div className='pageButtonsContainer'>
      <CategoryButton
        onClick={() => setTypeOfExercice(dispatch, "cardio")}
        isActive={typeOfExercice.toLowerCase() === "cardio"}
        title='Cardio'
      />
      <CategoryButton
        onClick={() => setTypeOfExercice(dispatch, "gym")}
        isActive={typeOfExercice.toLowerCase() === "gym"}
        title='Gym'
      />
      <CategoryButton
        onClick={() => setTypeOfExercice(dispatch, "weightlifting")}
        isActive={typeOfExercice.toLowerCase() === "weightlifting"}
        title='Weightlifting'
      />
      <CategoryButton
        onClick={() => setTypeOfExercice(dispatch, "wod")}
        isActive={typeOfExercice.toLowerCase() === "wod"}
        title='WOD'
      />
      <CategoryButton
        onClick={() => setTypeOfExercice(dispatch, "accessory")}
        isActive={typeOfExercice.toLowerCase() === "accessory"}
        title='Accessory Work'
      />
    </div>
  );
};

export default PageButtonsContainer;
