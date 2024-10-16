import { combineReducers } from '@reduxjs/toolkit';
import { reducerNames } from './reducerNames';

/* Reducers */
import episodeDetailSlice from '@/modules/EpisodeDetail/redux/slice';
import podcastDetailSlice from '@/modules/PodcastDetail/redux/slice';
import podcastsListSlice from '@/modules/PodcastsList/redux/slice';

export const rootReducer = combineReducers({
  [reducerNames.PODCASTS_LIST_REDUCER]: podcastsListSlice.reducer,
  [reducerNames.PODCAST_DETAIL_REDUCER]: podcastDetailSlice.reducer,
  [reducerNames.EPISODE_DETAIL_REDUCER]: episodeDetailSlice.reducer,
});
