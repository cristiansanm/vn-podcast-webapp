import { PodcastDetail } from '../../model';
export interface PodcastDetailState {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  podcastDetail: PodcastDetail;
}
export const PODCAST_DETAIL_INIT_STATE: PodcastDetailState = {
  podcastDetail: {
    description: '',
    image: '',
    episodes: [],
    author: '',
    title: '',
  },
  isLoading: false,
  hasError: false,
  errorMessage: '',
};
