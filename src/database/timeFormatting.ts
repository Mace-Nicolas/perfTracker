export const formatTimeResult = (timeResult: {
  hours: string;
  minutes: string;
  seconds: string;
}) => {
  const hours = timeResult.hours === "" ? 0 : parseInt(timeResult.hours);
  const minutes = timeResult.minutes === "" ? 0 : parseInt(timeResult.minutes);
  const seconds = timeResult.seconds === "" ? 0 : parseInt(timeResult.seconds);
  const timeAsSeconds = hours * 3600 + minutes * 60 + seconds;

  return timeAsSeconds;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

const padToTwoDigits = (number: number) => {
  return number.toString().padStart(2, "0");
};

export const formatIntToHHMMSS = (number: number) => {
  let minutes: number = Math.floor(number % 60);
  let hours: number = Math.floor(number / 60);
  let seconds: number = Math.floor((number % 1) * 60);

  const time = `${padToTwoDigits(hours)}:${padToTwoDigits(
    minutes
  )}:${padToTwoDigits(seconds)}`;

  return time;
};
