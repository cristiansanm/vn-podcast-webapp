import { usePodcastsListSelector } from '@/modules/PodcastsList/hooks';
import { FC } from 'react';
import { Loader } from '../../components/Loader';

const Header: FC = () => {
  const { isLoading } = usePodcastsListSelector();

  const isLoadingRequest = isLoading;
  return (
    <header className="flex-row w-full justify-between flex p-4 border-b-2">
      <h1 className="text-2xl font-bold text-blue-500">Podcast</h1>
      {isLoadingRequest ? <Loader /> : <div />}
    </header>
  );
};

export { Header };
