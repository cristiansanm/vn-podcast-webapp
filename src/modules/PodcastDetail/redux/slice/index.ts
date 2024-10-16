import { reducerNames } from '@/redux/store/reducerNames';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAdpatedPodcastDetail } from '../../adapters/formatters';
import { PodcastDetail } from '../../model';
import { getPodcastDetail } from '../../services';
import { PODCAST_DETAIL_INIT_STATE, PodcastDetailState } from '../state';

const podcastDetailSlice = createSlice({
  name: reducerNames.PODCAST_DETAIL_REDUCER,
  initialState: PODCAST_DETAIL_INIT_STATE,
  reducers: {
    setPodcastDetailProperty: (
      state,
      action: PayloadAction<{
        prop: keyof PodcastDetail | keyof PodcastDetailState;
        value: PodcastDetail[keyof PodcastDetail] | PodcastDetailState[keyof PodcastDetailState];
        isDetail?: boolean;
      }>
    ) => {
      if (action.payload.isDetail) {
        state.podcastDetail[action.payload.prop] = action.payload.value as never;
        return;
      }
      state[action.payload.prop] = action.payload.value as never;
    },
    cleanPodcastDetail: (state) => {
      state.podcastDetail = PODCAST_DETAIL_INIT_STATE.podcastDetail;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPodcastDetail.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPodcastDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.podcastDetail = createAdpatedPodcastDetail(action.payload);
      })
      .addCase(getPodcastDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.errorMessage = (action?.payload as string) || '';
      });
  },
});

export const { setPodcastDetailProperty, cleanPodcastDetail } = podcastDetailSlice.actions;
export default podcastDetailSlice;
