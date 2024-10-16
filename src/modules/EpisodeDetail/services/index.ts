import { axiosInstance } from '@/services';
import { CORS_PROXY } from '@/services/api';

export const fetchFinalUrl = async (mediaAudio: string) => {
  try {
    const response = await axiosInstance.get(`${CORS_PROXY}${mediaAudio}`, {
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status < 400,
    });
    const finalUrl = response.headers['x-final-url'];
    return finalUrl;
  } catch (error) {
    console.error('Error fetching final URL:', error);
    return error;
  }
};
