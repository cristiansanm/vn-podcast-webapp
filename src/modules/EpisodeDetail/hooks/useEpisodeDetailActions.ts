import { useAppDispatch } from '@/redux/utils';
import { EpisodeDetail } from '../model';
import { setEpisodeDetail } from '../redux/slice';

export const useEpisodeDetailActions = () => {
  const dispatch = useAppDispatch();

  const actionSetEpisodeDetail = (episodeDetail: EpisodeDetail) => {
    dispatch(setEpisodeDetail(episodeDetail));
  };

  return { actionSetEpisodeDetail };
};
