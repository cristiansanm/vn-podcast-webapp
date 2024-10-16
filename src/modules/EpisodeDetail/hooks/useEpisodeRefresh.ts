/* eslint-disable react-hooks/exhaustive-deps */
import { usePodcastDetailApiCalls, usePodcastDetailSelector } from '@/modules/PodcastDetail/hooks';
import { useEffect, useState } from 'react';
import { EpisodeDetail } from '../model';

export const useEpisodeRefresh = ({ episodeId, id }: { episodeId: string; id: string }) => {
  const [episode, setEpisode] = useState<EpisodeDetail | null>(null);
  const {
    podcastDetail: { episodes, description, title },
  } = usePodcastDetailSelector();
  const { apiGetPodcastDetail } = usePodcastDetailApiCalls();

  useEffect(() => {
    if (!episodes.length && !description && !title) {
      apiGetPodcastDetail(id);
    }
    if (episodes.length) {
      setEpisode(episodes.find((ep) => ep.guid === episodeId));
    }
  }, [id, episodes, description, title]);

  return { episode };
};
