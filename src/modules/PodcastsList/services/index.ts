import { createAsyncThunk } from '@/redux/utils';
import {
  axiosInstance,
  CACHE_PODCAST_LIST_KEY,
  cacheIsExpired,
  PODCASTS_LIST_URI,
  SavedPodcastList,
} from '@/services';
import { CORS_PROXY } from '@/services/api';
import { EndpointPodcastList } from '../model';
enum PodcastsListActionTypes {
  GET_PODCASTS_LIST = 'GET_PODCASTS_LIST',
}
const { GET_PODCASTS_LIST } = PodcastsListActionTypes;
export const getPodcastsList = createAsyncThunk(
  GET_PODCASTS_LIST,
  async (_, { rejectWithValue }) => {
    const cacheKey = `${CORS_PROXY}${PODCASTS_LIST_URI}`;

    // Open the cache
    const cache = await caches.open(CACHE_PODCAST_LIST_KEY);

    // Check if the response is already cached
    const cachedResponse = await cache.match(cacheKey);

    if (cachedResponse) {
      const cachedData: SavedPodcastList = await cachedResponse.json();
      const isExpired = cacheIsExpired(cachedData.timestamp);
      if (!isExpired) {
        return cachedData.data as EndpointPodcastList;
      }
    }
    try {
      const response = await axiosInstance.get(`${CORS_PROXY}${PODCASTS_LIST_URI}`);
      const data = response.data as EndpointPodcastList;

      // Cache the new response
      const cacheData = new Response(JSON.stringify({ data, timestamp: new Date().getTime() }));
      await cache.put(cacheKey, cacheData);

      return data;
    } catch (error) {
      return rejectWithValue((error as Error)?.message);
    }
  }
);
