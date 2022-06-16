import { TypeOfExerciceProvider } from "./typeOfExercice/typeOfExercice-context";
import { AccountInfoProvider } from "./accountInfos/accountInfo-context";

const ContextProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <TypeOfExerciceProvider>
      <AccountInfoProvider>{children}</AccountInfoProvider>
    </TypeOfExerciceProvider>
  );
};

export default ContextProvider;
