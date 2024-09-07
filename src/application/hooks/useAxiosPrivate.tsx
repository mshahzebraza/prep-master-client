import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { axiosPrivate } from "../..//api/axios";
import { AxiosInstance, AxiosRequestConfig, AxiosError, InternalAxiosRequestConfig } from "axios";
import {User} from './types'


interface UseAuth {
  user: User | null;
  refreshToken: () => Promise<string | null>;
}

const useAxiosPrivate = (): AxiosInstance => {
  const { user, refreshToken }: UseAuth = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${user?.accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        const prevRequest = error.config as AxiosRequestConfig & { send?: boolean };

        if (error.response?.status === 403 && !prevRequest.send) {
          prevRequest.send = true;
          const newAccessToken = await refreshToken();
          if (prevRequest.headers) {
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          }
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [user, refreshToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;