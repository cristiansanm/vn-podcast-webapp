import { RootState } from '@/redux/utils';
import { createSelector } from '@reduxjs/toolkit';

const selectPodcastsListState = (state: RootState) => state.PODCASTS_LIST_REDUCER;

const selectPodcastsList = createSelector(
  [selectPodcastsListState],
  (podcastsState) => podcastsState.podcasts
);

const selectIsLoadingPodcasts = createSelector(
  [selectPodcastsListState],
  (podcastsState) => podcastsState.isLoading
);

const selectHasErrorPodcasts = createSelector(
  [selectPodcastsListState],
  (podcastsState) => podcastsState.hasError
);

const selectErrorMessagePodcasts = createSelector(
  [selectPodcastsListState],
  (podcastsState) => podcastsState.errorMessage
);
export {
  selectErrorMessagePodcasts,
  selectHasErrorPodcasts,
  selectIsLoadingPodcasts,
  selectPodcastsList,
};
