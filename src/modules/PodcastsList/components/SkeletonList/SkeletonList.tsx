import { PageTagContainer, SkeletonItem } from '@/components';
import { FC } from 'react';

export const SkeletonList: FC = () => {
  return (
    <PageTagContainer
      tag="section"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 10 }).map(() => {
        const uniqueId = crypto.randomUUID();
        return <SkeletonItem key={uniqueId} />;
      })}
    </PageTagContainer>
  );
};
