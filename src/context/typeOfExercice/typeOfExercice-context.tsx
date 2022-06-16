import React, { createContext, useReducer, useContext } from "react";

import {
  State,
  Action,
  Dispatch,
  TypeOfExerciceProviderProps,
} from "./typeOfExerciceActions";

const TypeOfExerciceStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const typeOfExerciceReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_TYPE_OF_EXERCICE": {
      return { typeOfExercice: action.payload };
    }
    default: {
      throw new Error("Unhandled action type: " + action.type);
    }
  }
};

const TypeOfExerciceProvider = ({ children }: TypeOfExerciceProviderProps) => {
  const [state, dispatch] = useReducer(typeOfExerciceReducer, {
    typeOfExercice: "cardio",
  });
  const value = { state, dispatch };

  return (
    <TypeOfExerciceStateContext.Provider value={value}>
      {children}
    </TypeOfExerciceStateContext.Provider>
  );
};

const useTypeOfExercice = () => {
  const context = useContext(TypeOfExerciceStateContext);
  if (context === undefined) {
    throw new Error(
      "useTypeOfExercice must be used within a TypeOfExerciceProvider"
    );
  }
  return context;
};

export { TypeOfExerciceProvider, useTypeOfExercice };
