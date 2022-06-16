import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore/lite";

import { AddButton, CancelButton } from "../buttons/buttons.component";
import ExerciceInput from "../exerciceInput/exerciceInput.component";
import LineChart from "../lineChart/lineChart.component";
import AddResultForm from "../addResultForm/addResultForm.component";

import "./graphContainer.component.styles.scss";
import { database } from "../../database/firebase";

const GraphContainer = () => {
  const [isAddExerciceActive, setIsAddExerciceActive] = useState(false);
  const getExercices = async (database: any) => {
    const exercices = collection(
      database,
      "exercices",
      "byType",
      "accessoryWork"
    );
    const exercicesSnapshot = await getDocs(exercices);
    const exercicesList = exercicesSnapshot.docs.map((doc: any) => doc.data());
    return exercicesList;
  };

  useEffect(() => {
    const getD = async () => {
      const res = await getExercices(database);
      console.log(res);
    };
    getD();
  }, []);
  return (
    <div className='graphContainer'>
      <div
        className='flex flex-row flex-left justify-evenly'
        style={{ width: "80%" }}
      >
        <ExerciceInput />

        {isAddExerciceActive ? (
          <CancelButton
            title='Cancel'
            onClick={() => setIsAddExerciceActive(!isAddExerciceActive)}
          />
        ) : (
          <AddButton
            title='Add a result'
            onClick={() => setIsAddExerciceActive(!isAddExerciceActive)}
          />
        )}
      </div>

      {isAddExerciceActive ? <AddResultForm /> : <LineChart />}
    </div>
  );
};

export default GraphContainer;
