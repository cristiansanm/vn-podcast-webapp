import { RootState } from '@/redux/utils';
import { createSelector } from '@reduxjs/toolkit';

const episodeDetailState = (state: RootState) => state.EPISODE_DETAIL_REDUCER;

export const selectEpisodeDetail = createSelector([episodeDetailState], (state) => state);
