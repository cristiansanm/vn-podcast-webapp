import { EndpointPodcastEntry } from './EndpointPodcastEntry.model';

export interface EndpointPodcastList {
  feed: {
    author: {
      name: {
        label: string;
      };
      uri: {
        label: string;
      };
    };
    entry: EndpointPodcastEntry[];
    updated: {
      label: string;
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    icon: {
      label: string;
    };
    link: {
      attributes: {
        rel: string;
        type: string;
        href: string;
      };
    }[];
    id: {
      label: string;
    };
  };
}
