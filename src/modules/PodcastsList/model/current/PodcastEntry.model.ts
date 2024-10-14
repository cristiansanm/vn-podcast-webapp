import { PodcastImage } from './PodcastImage.model';

export interface PodcastEntry {
  name: string;
  images: PodcastImage[];
  description: string;
  author: string;
  podcastId: string;
}
