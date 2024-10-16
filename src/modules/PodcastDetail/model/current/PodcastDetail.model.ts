import { EpisodeDetail } from '@/modules/EpisodeDetail/model';

export interface PodcastDetail {
  description?: string;
  image: string;
  author: string;
  episodes?: EpisodeDetail[];
  title: string;
  podcastId?: string;
}
