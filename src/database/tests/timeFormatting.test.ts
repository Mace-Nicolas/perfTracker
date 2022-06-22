import { formatIntToHHMMSS } from "../timeFormatting";

test("formatIntToHHMMSS", () => {
  expect(formatIntToHHMMSS(7.5)).toBe("00:07:30");
});
