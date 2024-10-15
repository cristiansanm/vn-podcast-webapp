import { createBrowserRouter } from 'react-router-dom';

/* Pages */
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
    ],
  },
]);
