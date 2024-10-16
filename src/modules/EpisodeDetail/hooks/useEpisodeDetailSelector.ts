import { useAppSelector } from '@/redux/utils';
import { selectEpisodeDetail } from '../redux/selector';

export const useEpisodeDetailSelector = () => {
  const episodeDetail = useAppSelector(selectEpisodeDetail);

  return { episodeDetail };
};
