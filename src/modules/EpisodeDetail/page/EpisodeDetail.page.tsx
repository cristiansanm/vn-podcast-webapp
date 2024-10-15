import { EpisodeDetailParams, PodcastDetailParams } from '@/routes';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetail: FC = () => {
  const { episodeId, id } = useParams<
    keyof EpisodeDetailParams & keyof PodcastDetailParams
  >() as EpisodeDetailParams & PodcastDetailParams;
  return (
    <div>
      EpisodeDetail.page {episodeId} {id}
    </div>
  );
};

export default EpisodeDetail;
