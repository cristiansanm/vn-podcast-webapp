import { useParams } from 'react-router-dom';

export const usePageParams = () => {
  const { id } = useParams<{ id: string }>();
  const { episodeId } = useParams<{ episodeId: string }>();
  return { id: id ?? '', episodeId: episodeId ?? '' };
};
