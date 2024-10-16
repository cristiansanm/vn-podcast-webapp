import { createAdaptedEpisodeDetail } from '@/modules/EpisodeDetail/adapters/formatters';
import { EndpointEpisodeDetail } from '@/modules/EpisodeDetail/model';
import { EndpointPodcastRSSFeed, PodcastDetail } from '../../model';

export const createAdpatedPodcastDetail = (
  podcastDetail: EndpointPodcastRSSFeed
): PodcastDetail => {
  const revertedEpisodes = podcastDetail?.items?.reverse();
  return {
    title: podcastDetail?.title || '',
    description: podcastDetail?.itunes?.summary || '',
    image: podcastDetail?.image?.url || '',
    episodes: revertedEpisodes?.map((episode: EndpointEpisodeDetail) =>
      createAdaptedEpisodeDetail(episode)
    ),
    author: podcastDetail?.itunes?.author || '',
  };
};
