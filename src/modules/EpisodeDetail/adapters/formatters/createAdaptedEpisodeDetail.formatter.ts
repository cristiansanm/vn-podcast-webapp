import { convertIsoDateIntoTime } from '@/utils';
import { EndpointEpisodeDetail, EpisodeDetail } from '../../model';

export const createAdaptedEpisodeDetail = (episodeDetail: EndpointEpisodeDetail): EpisodeDetail => {
  return {
    title: episodeDetail.title || '',
    description: episodeDetail?.content || '',
    htmlDescription: episodeDetail['content:encoded'],
    mediaAudio: episodeDetail?.enclosure?.url || '',
    pubDate: episodeDetail?.pubDate || '',
    duration: episodeDetail?.itunes.duration || '',
    guid: convertIsoDateIntoTime(episodeDetail?.isoDate) || '',
  };
};
