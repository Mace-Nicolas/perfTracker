export const formatResult = (timeResult: {
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  const hours = timeResult.hours;
  const minutes = timeResult.minutes;
  const seconds = timeResult.seconds;
  const timeAsSeconds = hours * 3600 + minutes * 60 + seconds;
  console.log(typeof minutes, seconds);
  return timeAsSeconds;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};
