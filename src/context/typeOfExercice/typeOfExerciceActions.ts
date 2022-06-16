export interface State {
  typeOfExercice: string;
}
export interface Action {
  type: "SET_TYPE_OF_EXERCICE";
  payload: string;
}
export interface Dispatch {
  (action: Action): void;
}
export interface TypeOfExerciceProviderProps {
  children: React.ReactNode;
}

export const setTypeOfExercice = (
  dispatch: Dispatch,
  typeOfExercice: string
) => {
  dispatch({ type: "SET_TYPE_OF_EXERCICE", payload: typeOfExercice });
};
