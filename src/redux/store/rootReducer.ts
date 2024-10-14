import podcastsListSlice from '@/modules/PodcastsList/redux/slice';
import { combineReducers } from '@reduxjs/toolkit';
import { reducerNames } from './reducerNames';

export const rootReducer = combineReducers({
  [reducerNames.PODCASTS_LIST_REDUCER]: podcastsListSlice.reducer,
  // podcastsList: podcastsListSlice.reducer,
  // podcastDetails: podcastDetailsSlice.reducer,
  // episodesList: episodesListSlice.reducer,
  // search: searchSlice.reducer,
});
