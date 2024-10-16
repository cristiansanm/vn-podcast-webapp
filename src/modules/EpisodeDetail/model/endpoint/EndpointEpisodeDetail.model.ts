export interface EndpointEpisodeDetail {
  content: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  contentSnippet: string;
  enclosure: {
    length: string;
    type: string;
    url: string;
  };
  guid: string;
  isoDate: string;
  itunes: {
    duration: string;
    episode: string;
    episodeType: string;
    explicit: string;
    image: string;
    summary: string;
  };
  pubDate: string;
  title: string;
}
