import { createBrowserRouter } from 'react-router-dom';

/* Pages */
import EpisodeDetail from '@/modules/EpisodeDetail/page';
import PodcastDetail from '@/modules/PodcastDetail/page';
import PodcastsList from '@/modules/PodcastsList/page';
import ErrorPage from '@/pages/ErrorPage';
import Layout from '@/pages/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <PodcastsList />,
      },
      {
        path: '/podcast/:id',
        element: <PodcastDetail />,
      },
      {
        path: '/podcast/:id/episode/:episodeId',
        element: <EpisodeDetail />,
      },
    ],
  },
]);
