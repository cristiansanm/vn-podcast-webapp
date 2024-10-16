import { EndpointPodcastRSSFeed } from '@/modules/PodcastDetail/model';
import { axiosInstance, CACHE_PODCAST_LIST_KEY, cacheIsExpired, SavedPodcast } from '@/services';
import { CORS_PROXY, PODCAST_DETAIL_URI } from '@/services/api';
import Parser from 'rss-parser/dist/rss-parser.min.js';
import { compress, decompress } from 'compress-json';
const parser = new Parser();

export async function rssParser(feedUrl: string) {
  try {
    const feed = await parser.parseURL(`${CORS_PROXY}${feedUrl}`);
    return feed;
  } catch (error) {
    return error;
  }
}

export async function getPodcastEpisodes(podcastId: number): Promise<EndpointPodcastRSSFeed> {
  const cacheKey = `${CORS_PROXY}${PODCAST_DETAIL_URI}${podcastId}`;

  // Open the cache
  const cache = await caches.open(CACHE_PODCAST_LIST_KEY);

  // Check if the response is already cached
  const cachedResponse = await cache.match(cacheKey);
  if (cachedResponse) {
    const cachedData: SavedPodcast = await cachedResponse.json();
    const isExpired = cacheIsExpired(cachedData.timestamp);
    if (!isExpired) {
      return cachedData.data as EndpointPodcastRSSFeed;
    }
  }

  try {
    // Fetch the response from the network
    const response = await axiosInstance.get(`${cacheKey}`);
    const data = response.data.results[0];
    const feedUrl = data.feedUrl;

    // Fetch and parse the RSS feed
    const feed = await parser.parseURL(feedUrl);

    // Cache the new response
    const cacheData = new Response(JSON.stringify({ data: feed, timestamp: new Date().getTime() }));
    await cache.put(cacheKey, cacheData);

    return feed;
  } catch (error) {
    return error;
  }
}
