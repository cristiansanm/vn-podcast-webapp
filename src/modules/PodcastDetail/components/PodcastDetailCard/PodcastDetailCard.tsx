import { Divider, PageTagContainer } from '@/components';
import { useNavigationMethods } from '@/hooks';
import { purifyHtml } from '@/utils';
import { FC } from 'react';
import { usePodcastDetailSelector } from '../../hooks';

type PodcastDetailCardProps = {
  fromEpisodeDetail?: boolean;
};
export const PodcastDetailCard: FC<PodcastDetailCardProps> = ({ fromEpisodeDetail }) => {
  const { podcastDetail } = usePodcastDetailSelector();
  const { goBack } = useNavigationMethods();
  const injectGoBack = fromEpisodeDetail ? { onClick: goBack } : {};
  const formattedDescription = purifyHtml(podcastDetail.description);
  return (
    <PageTagContainer tag="article" className="col-span-1 md:col-span-1">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div
          className={`flex justify-center ${fromEpisodeDetail ? 'cursor-pointer' : ''}`}
          {...injectGoBack}>
          <img
            src={podcastDetail.image}
            alt={podcastDetail.title}
            className="w-48 h-48 rounded-md"
          />
        </div>
        <Divider hasBorder borderColor="lightgrey" borderWidth="2px" />
        <Divider />
        <h3
          className={`text-lg font-semibold ${fromEpisodeDetail ? 'cursor-pointer' : ''}`}
          {...injectGoBack}>
          {podcastDetail.title}
        </h3>
        <p
          className={`italic text-sm ${fromEpisodeDetail ? 'cursor-pointer' : ''}`}
          {...injectGoBack}>
          by {podcastDetail.author}
        </p>
        <Divider hasBorder borderColor="lightgrey" borderWidth="2px" />
        <Divider />
        <h4 className="font-semibold">Description: </h4>
        <Divider />
        <div
          className="italic text-sm text-left"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
      </div>
    </PageTagContainer>
  );
};
