export interface State {
  username: string;
  email: string;
}
export interface Action {
  type: "SET_USERNAME" | "SET_EMAIL";
  payload: string;
}

export interface Dispatch {
  (action: Action): void;
}
export interface AccountInfoProviderProps {
  children: React.ReactNode;
}
export const setUsername = (dispatch: Dispatch, username: string) => {
  dispatch({ type: "SET_USERNAME", payload: username });
};
export const setEmail = (dispatch: Dispatch, email: string) => {
  dispatch({ type: "SET_EMAIL", payload: email });
};
