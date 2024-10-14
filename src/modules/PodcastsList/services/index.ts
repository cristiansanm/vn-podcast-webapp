import { createAsyncThunk } from '@/redux/utils';
import { axiosInstance } from '@/services';
import { EndpointPodcastList } from '../model';
enum PodcastsListActionTypes {
  GET_PODCASTS_LIST = 'GET_PODCASTS_LIST',
  GET_PODCASTS_LIST_SUCCESS = 'GET_PODCASTS_LIST_SUCCESS',
  GET_PODCASTS_LIST_ERROR = 'GET_PODCASTS_LIST_ERROR',
}
const { GET_PODCASTS_LIST } = PodcastsListActionTypes;
export const getPodcastsList = createAsyncThunk(
  GET_PODCASTS_LIST,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      );
      const data: EndpointPodcastList = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
