import { createDateFromDDMMYYYY } from "../formattingResultFromDB";

test("createDateFromDDMMYYYY", () => {
  const date = createDateFromDDMMYYYY("01/01/2020");
  expect(date.getFullYear()).toBe(2020);
  expect(date.getMonth()).toBe(0);
  expect(date.getDate()).toBe(1);
});
