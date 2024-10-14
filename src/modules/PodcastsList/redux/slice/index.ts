import { reducerNames } from '@/redux/store/reducerNames';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAdaptedPodcastsList } from '../../adapters/formatters';
import { PodcastEntry } from '../../model';
import { getPodcastsList } from '../../services';
import { PODCASTS_LIST_INIT_STATE } from '../state';

const podcastsListSlice = createSlice({
  name: reducerNames.PODCASTS_LIST_REDUCER,
  initialState: PODCASTS_LIST_INIT_STATE,
  reducers: {
    setPodcastsList(state, action: PayloadAction<PodcastEntry[]>) {
      state.podcasts = action.payload;
    },
    cleanPodcastsList(state) {
      state.podcasts = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPodcastsList.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.errorMessage = '';
      })
      .addCase(getPodcastsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.podcasts = createAdaptedPodcastsList(action.payload);
      })
      .addCase(getPodcastsList.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.errorMessage = (action?.payload as string) || '';
      });
  },
});

export const { setPodcastsList, cleanPodcastsList } = podcastsListSlice.actions;
export default podcastsListSlice;
