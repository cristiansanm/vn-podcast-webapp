import DOMPurify from 'dompurify';

export const purifyHtml = (html: string): string => {
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
};
