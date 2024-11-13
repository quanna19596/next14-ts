export const objectIsEmpty = (obj?: Record<string, unknown>): boolean => {
  return obj ? Object.keys(obj).length === 0 : true;
};

export const getArrayFrom0To = (numb: number, stringify?: boolean): (number | string)[] => {
  return Array(numb + 1)
    .fill('')
    .map((_, i) => {
      if (!stringify) return i;
      return i < 10 ? `0${i}` : i;
    });
};

export const isDigit = (str: string | number): boolean => {
  return !isNaN(+str);
};

export const generateUniqueId = (): string => {
  return crypto.randomUUID();
};

export const shuffleArray = (arr: any[]): any[] => {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
