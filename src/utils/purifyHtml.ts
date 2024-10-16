import DOMPurify from 'dompurify';

export const purifyHtml = (html: string): string => {
  if (!html) {
    return '';
  }
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
};
