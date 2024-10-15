import { axiosInstance, PODCAST_DETAIL_URI } from '@/services';
import { CORS_PROXY } from '@/services/api';
import Parser from 'rss-parser/dist/rss-parser.min.js';

const parser = new Parser();

export async function getPodcastEpisodes(podcastId: number) {
  try {
    // Fetch podcast details from iTunes
    const podcastDetailsResponse = await axiosInstance.get(
      `${CORS_PROXY}${PODCAST_DETAIL_URI}${podcastId}`
    );
    const podcastDetails = podcastDetailsResponse.data.results[0];

    // Get the feed URL
    const feedUrl = podcastDetails.feedUrl;

    // Fetch and parse the RSS feed
    const feed = await parser.parseURL(feedUrl);

    return feed;
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
  }
}
