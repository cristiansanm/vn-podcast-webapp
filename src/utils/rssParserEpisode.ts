import axios from 'axios';
import Parser from 'rss-parser/dist/rss-parser.min.js';

const parser = new Parser();
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export async function getPodcastEpisodes(podcastId: number) {
  try {
    // Fetch podcast details from iTunes
    const podcastDetailsResponse = await axios.get(
      `${CORS_PROXY}https://itunes.apple.com/lookup?id=${podcastId}`
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
