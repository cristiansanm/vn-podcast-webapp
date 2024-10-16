import { createAsyncThunk } from '@/redux/utils';
import { getPodcastEpisodes } from '@/utils';
export enum PodcastDetailActionTypes {
  GET_PODCAST_DETAIL = 'GET_PODCAST_DETAIL',
}
const { GET_PODCAST_DETAIL } = PodcastDetailActionTypes;
export const getPodcastDetail = createAsyncThunk(
  GET_PODCAST_DETAIL,
  async (podcastId: string, { rejectWithValue }) => {
    try {
      const feed = await getPodcastEpisodes(Number(podcastId));
      return feed;
    } catch (error) {
      return rejectWithValue((error as Error)?.message || 'Error fetching podcast details');
    }
  }
);
