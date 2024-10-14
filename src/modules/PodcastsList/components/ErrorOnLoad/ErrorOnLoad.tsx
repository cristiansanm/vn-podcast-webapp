import { PageTagContainer } from '@/components';
import { FC } from 'react';

export const ErrorOnLoad: FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return (
    <PageTagContainer tag="section">
      <p className="text-red-500 text-lg">{errorMessage}</p>
    </PageTagContainer>
  );
};
