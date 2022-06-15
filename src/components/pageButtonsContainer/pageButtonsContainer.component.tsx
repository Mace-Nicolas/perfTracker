import React, { useState } from "react";
import { CategoryButton } from "../buttons/buttons.component";

import "./pageButtonsContainer.component.styles.scss";

const PageButtonsContainer = () => {
  const [activeCat, setActiveCat] = useState("cardio");
  return (
    <div className='pageButtonsContainer'>
      <CategoryButton
        onClick={() => setActiveCat("cardio")}
        isActive={activeCat.toLowerCase() === "cardio"}
        title='Cardio'
      />
      <CategoryButton
        onClick={() => setActiveCat("gym")}
        isActive={activeCat.toLowerCase() === "gym"}
        title='Gym'
      />
      <CategoryButton
        onClick={() => setActiveCat("weightlifting")}
        isActive={activeCat.toLowerCase() === "weightlifting"}
        title='Weightlifting'
      />
      <CategoryButton
        onClick={() => setActiveCat("wod")}
        isActive={activeCat.toLowerCase() === "wod"}
        title='WOD'
      />
      <CategoryButton
        onClick={() => setActiveCat("accessory")}
        isActive={activeCat.toLowerCase() === "accessory"}
        title='Accessory Work'
      />
    </div>
  );
};

export default PageButtonsContainer;
