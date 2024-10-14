import { FC, ReactElement } from 'react';
type PageContainerProps = {
  children: ReactElement | ReactElement[];
  tag?: 'section' | 'div' | 'main' | 'header' | 'footer' | 'aside' | 'nav' | 'article';
  className?: React.HTMLAttributes<HTMLElement>['className'];
};
export const PageTagContainer: FC<PageContainerProps> = ({ children, tag, className = '' }) => {
  const Tag = tag || 'div';
  return <Tag className={`px-4 ${className}`}>{children}</Tag>;
};
