import { ref } from 'vue';
import axios from 'axios';

export const useTokenManager = () => {
  const isRefreshing = ref(false);
  const refreshQueue: Array<(token: string) => void> = [];

  const isTokenRefreshing = () => isRefreshing.value;

  const queueFailedRequest = () => {
    return new Promise((resolve) => {
      refreshQueue.push((token: string) => resolve(token));
    });
  };

  const processQueue = (newToken: string) => {
    refreshQueue.forEach((callback) => callback(newToken));
    refreshQueue.length = 0;
  };

  const refreshAccessToken = async (baseURL: string) => {
    isRefreshing.value = true;
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post(`${baseURL}/auth/refresh`, { refreshToken });
      const { accessToken } = response.data;
      
      localStorage.setItem('token', accessToken);
      processQueue(accessToken);
      return accessToken;
    } catch (error) {
      throw error;
    } finally {
      isRefreshing.value = false;
    }
  };

  const clearTokens = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  };

  return {
    isTokenRefreshing,
    queueFailedRequest,
    refreshAccessToken,
    clearTokens
  };
};
