import React, { useState, useEffect } from "react";

import { AddButton, CancelButton } from "../buttons/buttons.component";
import ExerciceInput from "../exerciceInput/exerciceInput.component";
import LineChart from "../lineChart/lineChart.component";
import AddResultForm from "../addResultForm/addResultForm.component";

import "./graphContainer.component.styles.scss";

import { useTypeOfExercice } from "../../context/typeOfExercice/typeOfExercice-context";
import { setTypeOfExercice } from "../../context/typeOfExercice/typeOfExerciceActions";

const typeOfExercices = [
  { name: "Cardio" },
  { name: "Gym" },
  { name: "Weightlifting" },
  { name: "Accessory" },
  { name: "Wod" },
];

const GraphContainer = () => {
  const [isAddExerciceActive, setIsAddExerciceActive] = useState(false);

  const {
    state: { typeOfExercice },
    dispatch,
  } = useTypeOfExercice();

  return (
    <div className='graphContainer'>
      <div
        className='flex flex-row flex-left justify-evenly'
        style={{ width: "80%" }}
      >
        {isAddExerciceActive ? (
          <AddResultForm
            onCancel={() => setIsAddExerciceActive(!isAddExerciceActive)}
          />
        ) : (
          <>
            <ExerciceInput
              value={typeOfExercice}
              label='Type of exercice'
              options={typeOfExercices}
              handleChange={(e: any, value: any) => {
                value && setTypeOfExercice(dispatch, value?.toLowerCase());
              }}
            />
            <AddButton
              title='Add a result'
              onClick={() => setIsAddExerciceActive(!isAddExerciceActive)}
            />
          </>
        )}
      </div>

      {!isAddExerciceActive && <LineChart />}
    </div>
  );
};

export default GraphContainer;

// const getExercices = async (database: any) => {
//   const exercices = collection(
//     database,
//     "exercices",
//     "byType",
//     "accessoryWork"
//   );
//   const exercicesSnapshot = await getDocs(exercices);
//   const exercicesList = exercicesSnapshot.docs.map((doc: any) => doc.data());
//   return exercicesList;
// };
