import React, { createContext, useReducer, useContext } from "react";

import {
  State,
  Action,
  Dispatch,
  AccountInfoProviderProps,
} from "./accountInfoActionTypes";

const AccountInfoStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const accountInfoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_EMAIL": {
      return { ...state, email: action.payload };
    }
    case "SET_USERNAME": {
      return { ...state, username: action.payload };
    }
    default: {
      throw new Error("Unhandled action type: " + action.type);
    }
  }
};

const AccountInfoProvider = ({ children }: AccountInfoProviderProps) => {
  const [state, dispatch] = useReducer(accountInfoReducer, {
    email: "mace_nicolas@icloud.com",
    username: "NicoCF20",
  });
  const value = { state, dispatch };

  return (
    <AccountInfoStateContext.Provider value={value}>
      {children}
    </AccountInfoStateContext.Provider>
  );
};

const useAccountInfo = () => {
  const context = useContext(AccountInfoStateContext);
  if (context === undefined) {
    throw new Error("useAccountInfo must be used within a AccountInfoProvider");
  }
  return context;
};

export { AccountInfoProvider, useAccountInfo };
