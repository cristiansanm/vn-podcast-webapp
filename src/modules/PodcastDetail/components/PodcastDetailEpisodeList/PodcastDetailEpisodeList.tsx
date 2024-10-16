import { Divider, PageTagContainer } from '@/components';
import { formattedTime } from '@/utils';
import { Link } from 'react-router-dom';
import { usePodcastDetailSelector } from '../../hooks';
import { nanoid } from '@reduxjs/toolkit';

export const PodcastDetailEpisodeList = () => {
  const { podcastDetail } = usePodcastDetailSelector();
  return (
    <PageTagContainer tag="section" className="col-span-1 md:col-span-3">
      <div className="bg-white p-2 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Episodes: {podcastDetail.episodes?.length}</h2>
      </div>
      <Divider />
      {podcastDetail.episodes?.length ? (
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Publication Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {podcastDetail?.episodes?.map((episode) => (
              <tr key={nanoid()}>
                <td className="px-6 py-4 text-sm font-medium">
                  <Link to={`episode/${episode.guid}`}>{episode.title}</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(episode.pubDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formattedTime(episode.duration)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </PageTagContainer>
  );
};
