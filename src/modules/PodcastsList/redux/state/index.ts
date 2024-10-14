import { PodcastsList } from '../../model';

export interface PodcastsListState {
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
}

export const PODCASTS_LIST_INIT_STATE: PodcastsListState & PodcastsList = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
  podcasts: [],
};
