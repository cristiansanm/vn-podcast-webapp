import { Divider, PageTagContainer } from '@/components';
import { purifyHtml } from '@/utils';
import { FC } from 'react';
import { useEpisodeGetAudio } from '../../hooks';
import { EpisodeDetail } from '../../model';
import { UrlAudio } from '../UrlAudio';

type EpisodeDetailCardProps = { episode: EpisodeDetail };
export const EpisodeDetailCard: FC<EpisodeDetailCardProps> = ({ episode }) => {
  const audioData = useEpisodeGetAudio(episode?.mediaAudio);
  const formattedEpisodeDescription = purifyHtml(episode?.description);
  const url = audioData?.url ?? null;
  const isLoading = audioData?.isLoading ?? false;
  const hasError = audioData?.hasError ?? false;

  return (
    <PageTagContainer tag="section" className="col-span-1 md:col-span-3">
      <div className="bg-white shadow-md w-fulln p-4">
        <div>
          <h3 className="text-lg font-semibold">{episode.title}</h3>
          <p className="text-sm text-gray-500">{episode.pubDate}</p>
          <Divider />
          <div
            className="italic text-sm"
            dangerouslySetInnerHTML={{ __html: formattedEpisodeDescription }}
          />
        </div>
        <UrlAudio finalUrlAudio={url ?? ''} isLoading={isLoading} hasError={hasError} />
      </div>
    </PageTagContainer>
  );
};
