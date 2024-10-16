import { useAppDispatch } from '@/redux/utils';
import { PodcastDetail } from '../model';
import { setPodcastDetailProp } from '../redux/slice';

export const usePodcastDetailActions = () => {
  const dispatch = useAppDispatch();

  const actionSetPodcastDetailProp = ({
    prop,
    value,
  }: {
    prop: keyof PodcastDetail;
    value: PodcastDetail[keyof PodcastDetail];
  }) => {
    dispatch(setPodcastDetailProp({ prop, value }));
  };

  const actionSetPodcastId = (podcastId: string) => {
    actionSetPodcastDetailProp({ prop: 'podcastId', value: podcastId });
  };

  return {
    actionSetPodcastDetailProp,
    actionSetPodcastId,
  };
};
