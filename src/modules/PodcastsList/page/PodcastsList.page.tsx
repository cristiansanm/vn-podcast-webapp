/* eslint-disable react-hooks/exhaustive-deps */
import { PageTagContainer } from '@/components';
import { FC, useEffect } from 'react';
import { ErrorOnLoad, List, SkeletonList } from '../components';
import { usePodcastsListApiCalls, usePodcastsListSelector } from '../hooks';

const PodcastsList: FC = () => {
  const { isLoading, hasError, errorMessage } = usePodcastsListSelector();
  const { getApiPodcastsLists } = usePodcastsListApiCalls();
  useEffect(() => {
    getApiPodcastsLists();
  }, []);

  if (isLoading) {
    return <SkeletonList />;
  }
  if (hasError) {
    return <ErrorOnLoad errorMessage={errorMessage} />;
  }

  return (
    <PageTagContainer tag="main" className="pb-4">
      <List />
    </PageTagContainer>
  );
};

export { PodcastsList };
