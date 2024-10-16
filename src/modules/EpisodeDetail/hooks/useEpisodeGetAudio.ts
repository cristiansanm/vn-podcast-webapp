import { axiosInstance } from '@/services';
import { CORS_PROXY } from '@/services/api';
import { useEffect, useState } from 'react';

export const useEpisodeGetAudio = (mediaAudio: string) => {
  const [urlAudio, setUrlAudio] = useState<{
    url: string | null;
    hasError: boolean;
    isLoading: boolean;
  } | null>({
    url: null,
    hasError: false,
    isLoading: false,
  });
  useEffect(() => {
    const fetchFinalUrl = async () => {
      try {
        setUrlAudio((prev) => ({
          ...prev,
          isLoading: true,
          url: prev?.url ?? null,
          hasError: prev?.hasError ?? false,
        }));
        const response = await axiosInstance.get(`${CORS_PROXY}${mediaAudio}`, {
          maxRedirects: 0,
          validateStatus: (status) => status >= 200 && status < 400,
        });
        const finalUrl = response.headers['x-final-url'];
        setUrlAudio((prev) => ({ ...prev, url: finalUrl, isLoading: false, hasError: false }));
      } catch (error) {
        console.error('Error fetching final URL:', error);
        setUrlAudio((prev) => ({
          ...prev,
          hasError: true,
          isLoading: false,
          url: prev?.url ?? null,
        }));
        return error;
      } finally {
        setUrlAudio((prev) => ({
          ...prev,
          isLoading: false,
          url: prev?.url ?? null,
          hasError: prev?.hasError ?? false,
        }));
      }
    };

    fetchFinalUrl();
  }, [mediaAudio]);

  return urlAudio;
};
