export interface ResultType {
  date: string;
  result: number;
}

export interface State {
  results: ResultType[];
}
export interface Action {
  type: "SET_RESULTS";
  payload: ResultType[];
}

export interface Dispatch {
  (action: Action): void;
}
export interface ExerciceDataProviderProps {
  children: React.ReactNode;
}
export const setExerciceResults = (
  dispatch: Dispatch,
  results: ResultType[]
) => {
  dispatch({ type: "SET_RESULTS", payload: results });
};
