import { createContext, useReducer, useContext } from "react";

import {
  State,
  Action,
  Dispatch,
  ExerciceDataProviderProps,
} from "./exerciceDataActionTypes";

const ExerciceDataStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const exerciceDataReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_RESULTS": {
      return { ...state, results: action.payload };
    }
    default: {
      throw new Error("Unhandled action types", action.type);
    }
  }
};

const ExerciceDataProvider = ({ children }: ExerciceDataProviderProps) => {
  const [state, dispatch] = useReducer(exerciceDataReducer, {
    results: [],
  });
  const value = { state, dispatch };

  return (
    <ExerciceDataStateContext.Provider value={value}>
      {children}
    </ExerciceDataStateContext.Provider>
  );
};

const useExerciceData = () => {
  const context = useContext(ExerciceDataStateContext);
  if (context === undefined) {
    throw new Error(
      "useExerciceData must be used within a ExerciceDataProvider"
    );
  }
  return context;
};

export { ExerciceDataProvider, useExerciceData };
