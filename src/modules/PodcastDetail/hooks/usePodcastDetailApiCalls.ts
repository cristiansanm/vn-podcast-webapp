import { useAppDispatch } from '@/redux/utils';
import { getPodcastDetail } from '../services';

export const usePodcastDetailApiCalls = () => {
  const dispatch = useAppDispatch();

  const apiGetPodcastDetail = (podcastId: string) => {
    dispatch(getPodcastDetail(podcastId));
  };

  return { apiGetPodcastDetail };
};
