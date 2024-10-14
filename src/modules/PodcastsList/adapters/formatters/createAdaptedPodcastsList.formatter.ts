import { EndpointPodcastList, PodcastEntry } from '../../model';

/**
 * The function `createAdaptedPodcastList` takes an `EndpointPodcastList` and returns a transformed
 * `PodcastsList` by mapping and adapting the data structure.
 * @param {EndpointPodcastList} podcastsList - EndpointPodcastList is an object containing a list of
 * podcasts fetched from an API endpoint. It has a structure like this:
 * @returns The function `createAdaptedPodcastList` takes in a `podcastsList` of type
 * `EndpointPodcastList` and returns a new object of type `PodcastsList`. This new object contains an
 * array of adapted podcast objects with properties such as name, images, description, author, and
 * podcastId. Each podcast object is created by mapping over the entries in the input `podcastsList`
 */
export const createAdaptedPodcastsList = (podcastsList: EndpointPodcastList): PodcastEntry[] => {
  return podcastsList.feed.entry.map((entry) => ({
    name: entry.title.label,
    images: entry['im:image'].map((image) => ({
      url: image.label,
      height: image.attributes.height,
    })),
    description: entry.summary.label,
    author: entry['im:artist'].label,
    podcastId: entry.id.attributes['im:id'],
  }));
};
