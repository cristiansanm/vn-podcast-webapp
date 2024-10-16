export const formatGUID = (guid: string): string => {
  if (guid && guid.includes('/')) {
    const splitGUID = guid.split('/');
    return splitGUID[splitGUID.length - 1];
  }
  return guid;
};
