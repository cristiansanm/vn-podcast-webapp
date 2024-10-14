import { useAppDispatch } from '@/redux/utils';
import { getPodcastsList } from '../services';

export const usePodcastsListApiCalls = () => {
  const dispatch = useAppDispatch();

  const getApiPodcastsLists = () => {
    dispatch(getPodcastsList());
  };

  return { getApiPodcastsLists };
};
