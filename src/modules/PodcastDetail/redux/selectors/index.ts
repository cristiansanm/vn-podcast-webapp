import { RootState } from '@/redux/utils';
import { createSelector } from '@reduxjs/toolkit';

const selectPodcastsListState = (state: RootState) => state.PODCAST_DETAIL_REDUCER;

export const selectPodcastDetail = createSelector([selectPodcastsListState], (podcastsState) => {
  return podcastsState.podcastDetail;
});

export const selectIsLoadingPodcastDetail = createSelector(
  [selectPodcastsListState],
  (podcastsState) => {
    return podcastsState.isLoading;
  }
);

export const selectHasErrorPodcastDetail = createSelector(
  [selectPodcastsListState],
  (podcastsState) => {
    return podcastsState.hasError;
  }
);

export const selectErrorMessagePodcastDetail = createSelector(
  [selectPodcastsListState],
  (podcastsState) => {
    return podcastsState.errorMessage;
  }
);
