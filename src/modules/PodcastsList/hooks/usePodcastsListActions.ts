import { useAppDispatch } from '@/redux/utils';
import { PodcastEntry } from '../model';
import { cleanPodcastsList, setPodcastsList } from '../redux/slice';

export const usePodcastsListActions = () => {
  const dispatch = useAppDispatch();

  const setPodcasts = (podcastsList: PodcastEntry[]) => {
    dispatch(setPodcastsList(podcastsList));
  };

  const cleanPodcasts = () => {
    dispatch(cleanPodcastsList());
  };

  return { setPodcasts, cleanPodcasts };
};
