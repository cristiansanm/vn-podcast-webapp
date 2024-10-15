import { useAppSelector } from '@/redux/utils';
import { PodcastEntry } from '../model';
import {
  selectErrorMessagePodcasts,
  selectHasErrorPodcasts,
  selectIsLoadingPodcasts,
  selectPodcastsList,
} from '../redux/selector';

export const usePodcastsListSelector = (): {
  podcasts: PodcastEntry[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  searchQuery: string;
} => {
  const podcasts = useAppSelector(selectPodcastsList);
  const isLoading = useAppSelector(selectIsLoadingPodcasts);
  const hasError = useAppSelector(selectHasErrorPodcasts);
  const errorMessage = useAppSelector(selectErrorMessagePodcasts);
  const searchQuery = useAppSelector((state) => state.PODCASTS_LIST_REDUCER.searchQuery);
  return { podcasts, isLoading, hasError, errorMessage, searchQuery };
};
