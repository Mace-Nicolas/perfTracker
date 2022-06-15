import React, { useState } from "react";
import ExerciceInput from "../exerciceInput/exerciceInput.component";
import LineChart from "../lineChart/lineChart.component";
import { AddButton } from "../buttons/buttons.component";

import "./graphContainer.component.styles.scss";

const GraphContainer = () => {
  const [isAddExerciceActive, setIsAddExerciceActive] = useState(false);
  return (
    <div className='graphContainer'>
      <div
        className='flex flex-row flex-left justify-evenly'
        style={{ width: "80%" }}
      >
        <ExerciceInput />
        <AddButton
          title='Add a result'
          onClick={() => setIsAddExerciceActive(!isAddExerciceActive)}
        />
      </div>

      {isAddExerciceActive ? "" : <LineChart />}
    </div>
  );
};

export default GraphContainer;
