import { Divider, PageTagContainer } from '@/components';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const EpisodeNotFound: FC = () => {
  return (
    <PageTagContainer>
      <div>
        <h3 className="text-2xl font-semibold">Episode not found</h3>
        <Divider />
        <Link to="/">Go to main page</Link>
      </div>
    </PageTagContainer>
  );
};
