import { FC } from 'react';
import { usePodcastsListSelector } from '../../hooks';

export const List: FC = () => {
  const { podcasts } = usePodcastsListSelector();
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {podcasts.length ? (
        podcasts.map((podcast) => {
          return (
            <article
              key={podcast.podcastId}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:cursor-pointer active:scale-95"
              onClick={() => {
                // TODO: Add navigation to podcast details page
                console.log({ podcast });
              }}>
              <img
                src={podcast.images[2].url}
                alt={'podcast thumbnail'}
                className="w-48 h-48 object-cover rounded-full relative"
              />
              <h2 className="text-lg font-semibold mt-2 text-center">{podcast.name}</h2>
              <p className="text-gray-500 mt-2 text-center">{podcast.author}</p>
            </article>
          );
        })
      ) : (
        <p>No podcasts found</p>
      )}
    </section>
  );
};
