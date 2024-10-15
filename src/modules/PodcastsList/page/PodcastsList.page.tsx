/* eslint-disable react-hooks/exhaustive-deps */
import { Divider, PageTagContainer } from '@/components';
import { FC, useEffect } from 'react';
import { ErrorOnLoad, List, SearchBar, SkeletonList } from '../components';
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
      <SearchBar />
      <Divider />
      <List />
    </PageTagContainer>
  );
};

export default PodcastsList;
