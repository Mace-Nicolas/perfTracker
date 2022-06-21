import React, { useState } from "react";

import LineChart from "../lineChart/lineChart.component";
import AddResultForm from "../addResultForm/addResultForm.component";

import "./graphContainer.component.styles.scss";

import GetDataForm from "../getDataForm/getDataForm.component";
import { useExerciceData } from "../../context/exerciceData/exerciceData-context";

const GraphContainer = () => {
  const [isAddExerciceActive, setIsAddExerciceActive] = useState(false);

  const {
    state: { results },
  } = useExerciceData();

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
          <GetDataForm
            handleSetAddExerciceActive={() =>
              setIsAddExerciceActive(!isAddExerciceActive)
            }
          />
        )}
      </div>

      {!isAddExerciceActive && <LineChart data={results} />}
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
