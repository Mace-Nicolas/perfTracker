import { TypeOfExerciceProvider } from "./typeOfExercice/typeOfExercice-context";
import { AccountInfoProvider } from "./accountInfos/accountInfo-context";
import { ExerciceDataProvider } from "./exerciceData/exerciceData-context";

const ContextProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <TypeOfExerciceProvider>
      <ExerciceDataProvider>
        <AccountInfoProvider>{children}</AccountInfoProvider>
      </ExerciceDataProvider>
    </TypeOfExerciceProvider>
  );
};

export default ContextProvider;
