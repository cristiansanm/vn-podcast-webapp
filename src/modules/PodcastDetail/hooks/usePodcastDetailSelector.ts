import { useAppSelector } from '@/redux/utils';
import {
  selectErrorMessagePodcastDetail,
  selectHasErrorPodcastDetail,
  selectIsLoadingPodcastDetail,
  selectPodcastDetail,
} from '../redux/selectors';
import { PodcastDetailState } from '../redux/state';

export const usePodcastDetailSelector = (): PodcastDetailState => {
  const podcastDetail = useAppSelector(selectPodcastDetail);
  const hasError = useAppSelector(selectHasErrorPodcastDetail);
  const isLoading = useAppSelector(selectIsLoadingPodcastDetail);
  const errorMessage = useAppSelector(selectErrorMessagePodcastDetail);
  return { podcastDetail, hasError, isLoading, errorMessage };
};
