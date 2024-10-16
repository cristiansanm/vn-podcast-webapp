/* eslint-disable react-hooks/exhaustive-deps */
import { ErrorOnLoad, PageTagContainer, SkeletonItem } from '@/components';
import { PodcastDetailParams } from '@/routes';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PodcastDetailCard, PodcastDetailEpisodeList } from '../components';
import { usePodcastDetailApiCalls, usePodcastDetailSelector } from '../hooks';

const PodcastDetail: FC = () => {
  const { id } = useParams<keyof PodcastDetailParams>() as PodcastDetailParams;
  const { hasError, errorMessage, isLoading } = usePodcastDetailSelector();
  const { apiGetPodcastDetail } = usePodcastDetailApiCalls();

  useEffect(() => {
    apiGetPodcastDetail(id);
  }, []);

  if (hasError) {
    return <ErrorOnLoad errorMessage={errorMessage} />;
  }

  if (isLoading) {
    return <SkeletonItem />;
  }

  return (
    <PageTagContainer tag="main" className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-1 py-4">
      <PodcastDetailCard />
      <PodcastDetailEpisodeList />
    </PageTagContainer>
  );
};

export default PodcastDetail;
