/**
 * Removes all spaces from a given string.
 * @param text - The input string.
 * @returns The string without any spaces.
 */
export function removeSpaces(text: string): string {
  return text.replace(/\s+/g, '');
}
