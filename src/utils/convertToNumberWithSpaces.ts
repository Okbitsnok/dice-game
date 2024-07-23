/** Делит строку по 3 символа `1000000` -> `1 000 000`*/
export const convertToNumberWithSpaces = (value: string): string => {
  const preparedValue = String(value);

  const currentValue =
    !!preparedValue?.trim() && preparedValue.split(/\s/).join("");
  if (!currentValue) return preparedValue;

  const isNumber = /^\d+$/.test(currentValue);
  if (!isNumber) return preparedValue;

  return new Intl.NumberFormat("ru-RU").format(+currentValue);
};
