import axios from 'axios';

const axiosInstance = axios.create();

// axiosInstance.interceptors.response.use((response) => {
//   if (response.status !== 200) {
//     return Promise.reject(response);
//   }
// });

export default axiosInstance;
