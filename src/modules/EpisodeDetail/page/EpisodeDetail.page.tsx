import { PageTagContainer, SkeletonItem } from '@/components';
import { usePageParams } from '@/hooks';
import { PodcastDetailCard } from '@/modules/PodcastDetail/components';
import { usePodcastDetailSelector } from '@/modules/PodcastDetail/hooks';
import { FC } from 'react';
import { EpisodeDetailCard, EpisodeNotFound } from '../components';
import { useEpisodeRefresh } from '../hooks';

const EpisodeDetailPage: FC = () => {
  const { episodeId, id } = usePageParams();

  const { episode } = useEpisodeRefresh({ episodeId, id });

  const { isLoading } = usePodcastDetailSelector();

  if (isLoading) {
    return <SkeletonItem />;
  }

  if (!episode) {
    return <EpisodeNotFound />;
  }

  return (
    <PageTagContainer tag="main" className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-1 py-4">
      <PodcastDetailCard fromEpisodeDetail />
      <EpisodeDetailCard episode={episode} />
    </PageTagContainer>
  );
};

export default EpisodeDetailPage;
