import { EndpointPodcastRSSFeed } from '@/modules/PodcastDetail/model';
import { EndpointPodcastList } from '@/modules/PodcastsList/model';

const DAY = 24;
const HOUR = 60;
const MINUTE = 60;
const SECOND = 1000;

export const CACHE_PODCAST_LIST_KEY = 'podcastList';
export const CACHE_PODCAST_DETAIL_KEY = 'podcastDetail';
export const CACHE_DAY_EXPIRATION = DAY * HOUR * MINUTE * SECOND;
export const cacheIsExpired = (timestamp: number) => {
  return new Date().getTime() - timestamp > CACHE_DAY_EXPIRATION;
};

export type SavedPodcast = {
  podcastId: string;
  data: EndpointPodcastRSSFeed;
  timestamp: number;
};

export type SavedPodcastList = {
  data: EndpointPodcastList;
  timestamp: number;
};
