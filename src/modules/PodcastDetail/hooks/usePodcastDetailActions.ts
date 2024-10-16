import { useAppDispatch } from '@/redux/utils';
import { PodcastDetail } from '../model';
import { setPodcastDetailProperty } from '../redux/slice';
import { PodcastDetailState } from '../redux/state';

export const usePodcastDetailActions = () => {
  const dispatch = useAppDispatch();

  const actionSetPodcastDetailProp = ({
    prop,
    value,
    isDetail = false,
  }: {
    prop: keyof PodcastDetail | keyof PodcastDetailState;
    value: PodcastDetail[keyof PodcastDetail] | PodcastDetailState[keyof PodcastDetailState];
    isDetail?: boolean;
  }) => {
    dispatch(setPodcastDetailProperty({ prop, value, isDetail }));
  };

  const actionSetPodcastId = (podcastId: string) => {
    actionSetPodcastDetailProp({ prop: 'podcastId', value: podcastId, isDetail: true });
  };

  return {
    actionSetPodcastDetailProp,
    actionSetPodcastId,
  };
};
