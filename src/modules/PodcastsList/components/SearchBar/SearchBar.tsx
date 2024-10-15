import { FC } from 'react';
import { usePodcastsListActions, usePodcastsListSelector } from '../../hooks';

export const SearchBar: FC = () => {
  const { searchPodcasts } = usePodcastsListActions();
  const { searchQuery, podcasts } = usePodcastsListSelector();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    searchPodcasts(e.target.value);
  };
  return (
    <div className="w-full min-w-[200px] bg-white bg-opacity-70 sticky top-0 py-2 z-10 flex flex-row gap-4 justify-end items-center">
      <div className="bg-blue-600 py-1 px-3 rounded-md">
        <p className="text-white font-semibold">{podcasts.length}</p>
      </div>
      <input
        className="w-full max-w-sm bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Search for a podcast..."
        type="text"
        onChange={onChange}
        value={searchQuery}
      />
    </div>
  );
};
