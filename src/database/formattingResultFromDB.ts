export const convertSecondsToMinutesAndSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;
  return `${minutes}:${remainingSeconds}`;
};
export const convertSecondsToInt = (seconds: number) => {
  return parseFloat((seconds / 60).toFixed(2));
};

export const formatExerciceResFromDB = (exerciceRes: any) => {
  const formatedRes = exerciceRes.map(
    (ex: { date: string; result: string }) => ({
      date: ex.date,
      result: convertSecondsToInt(parseInt(ex.result)),
    })
  );

  formatedRes.sort(
    (a: any, b: any) =>
      createDateFromDDMMYYYY(a.date).getTime() -
      createDateFromDDMMYYYY(b.date).getTime()
  );

  return formatedRes;
};

export const createDateFromDDMMYYYY = (date: string) => {
  const [day, month, year] = date.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
