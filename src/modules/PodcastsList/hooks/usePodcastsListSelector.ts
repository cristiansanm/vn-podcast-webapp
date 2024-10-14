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
} => {
  const podcasts = useAppSelector(selectPodcastsList);
  const isLoading = useAppSelector(selectIsLoadingPodcasts);
  const hasError = useAppSelector(selectHasErrorPodcasts);
  const errorMessage = useAppSelector(selectErrorMessagePodcasts);
  return { podcasts, isLoading, hasError, errorMessage };
};
