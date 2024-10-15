import { PodcastDetailParams } from '@/routes';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const PodcastDetail: FC = () => {
  const { id } = useParams<keyof PodcastDetailParams>() as PodcastDetailParams;
  return <div>PodcastDetail.page {id}</div>;
};

export default PodcastDetail;
