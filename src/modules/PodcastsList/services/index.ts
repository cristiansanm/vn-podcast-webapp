import { createAsyncThunk } from '@/redux/utils';
import { axiosInstance, PODCASTS_LIST_URI } from '@/services';
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
      const response = await axiosInstance.get(PODCASTS_LIST_URI);
      const data = response.data as EndpointPodcastList;
      return data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
