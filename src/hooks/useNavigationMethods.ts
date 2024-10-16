import { useNavigate } from 'react-router-dom';

export const useNavigationMethods = () => {
  const navigate = useNavigate();

  const goToPodcastDetail = (id: string) => {
    navigate(`/podcast/${id}`);
  };

  const goToEpisodeDetail = (id: string) => {
    navigate(`episode/${id}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goToPodcastDetail, goToEpisodeDetail, goBack };
};
