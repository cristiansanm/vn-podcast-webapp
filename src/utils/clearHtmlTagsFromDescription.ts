export const clearHtmlTagsFromDescription = (description: string): string => {
  const withoutHtmlTags = description.replace(/<[^>]*>/g, '');
  return withoutHtmlTags.replace(/\.([^\s])/g, '. $1');
};
