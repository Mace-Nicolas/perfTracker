export const convertSecondsToMinutesAndSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;
  console.log(`${minutes}:${remainingSeconds}`);
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
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return formatedRes;
};
