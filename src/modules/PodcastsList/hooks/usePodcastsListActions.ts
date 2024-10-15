import { useAppDispatch } from '@/redux/utils';
import { PodcastEntry } from '../model';
import { cleanPodcastsList, setPodcastsList, setSearchQuery } from '../redux/slice';

export const usePodcastsListActions = () => {
  const dispatch = useAppDispatch();

  const setPodcasts = (podcastsList: PodcastEntry[]) => {
    dispatch(setPodcastsList(podcastsList));
  };

  const cleanPodcasts = () => {
    dispatch(cleanPodcastsList());
  };

  const searchPodcasts = (searchQuery: string) => {
    dispatch(setSearchQuery(searchQuery));
  };

  return { setPodcasts, cleanPodcasts, searchPodcasts };
};
