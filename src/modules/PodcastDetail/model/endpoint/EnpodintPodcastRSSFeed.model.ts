import { EndpointEpisodeDetail } from '@/modules/EpisodeDetail/model';

export interface EndpointPodcastRSSFeed {
  description: string;
  feedUrl: string;
  generator: string;
  image: {
    link: string;
    title: string;
    url: string;
  };
  items: EndpointEpisodeDetail[];
  itunes: {
    author: string;
    categories: string[];
    categoriesWithSubs: { name: string; sub: string | null }[];
    explicit: string;
    image: string;
    owner: {
      email: string;
    };
    summary: string;
  };
  language: string;
  link: string;
  managingEditor: string;
  paginationLinks: {
    self: string;
  };
  title: string;
}
