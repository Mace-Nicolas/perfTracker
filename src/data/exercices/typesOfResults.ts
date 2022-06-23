export const typeOfResultsPerExercice = {
  // Cardio
  run: { time: "distance", distance: "time" },
  row: { time: ["distance", "cal"], distance: "time", cal: "time" },
  skierg: { time: ["distance", "cal"], distance: "time", cal: "time" },
  du: { time: "rep", rep: "time" },

  // Gym
  // Strict, kipping, butterfly
  pullup: { rep: "time", time: "rep", weight: "rep" },
  chesttobar: { rep: "time", time: "rep", weight: "rep" },
  barmuscleup: { rep: "time", time: "rep", weight: "rep" },
  ringmuscleup: { rep: "time", time: "rep", weight: "rep" },

  // Weightlifting
  backsquat: { rep: "weight", time: "rep", weight: "rep" },
  frontsquat: { rep: "weight", time: "rep", weight: "rep" },
  overheadsquat: { rep: "weight", time: "rep", weight: "rep" },
  deadlift: { rep: "weight", time: "rep", weight: "rep" },
  benchpress: { rep: "weight", time: "rep", weight: "rep" },
  // Accessory
  curlbicepsbar: { rep: "weight", weight: "rep" },
};
