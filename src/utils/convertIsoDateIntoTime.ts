export const convertIsoDateIntoTime = (isoDate: string) => {
  return String(new Date(isoDate).getTime());
};
