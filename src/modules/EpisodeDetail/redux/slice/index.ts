import { reducerNames } from '@/redux/store/reducerNames';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodeDetail } from '../../model';
import { EPISODE_DETAIL_INIT_STATE } from '../state';

const episodeDetailSlice = createSlice({
  name: reducerNames.EPISODE_DETAIL_REDUCER,
  initialState: EPISODE_DETAIL_INIT_STATE,
  reducers: {
    setEpisodeDetail: (state, action: PayloadAction<EpisodeDetail>) => {
      state = action.payload;
    },
    clearEpisodeDetail: (_state) => {
      _state = EPISODE_DETAIL_INIT_STATE;
    },
  },
});

export const { setEpisodeDetail, clearEpisodeDetail } = episodeDetailSlice.actions;
export default episodeDetailSlice;
