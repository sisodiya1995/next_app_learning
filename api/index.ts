import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Create an instance of Axios
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add an interceptor to include authorization token in the request header
api.interceptors.request.use((config: any) => {
  const authToken = localStorage.getItem("test-token");

  config.headers = config.headers || {}; // Initialize headers if undefined

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response.status === 404) {
      window.location.replace(`/404`);
    }
    if (error.response.status === 401) {
      return Promise.reject(error);
    }

    // Handle errors
    return Promise.reject(error);
  }
);

// Define utility functions for GET, POST, PUT, and DELETE requests
const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.get<T>(url, config);
};

const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.post<T>(url, data, config);
};

const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.put<T>(url, data, config);
};

const del = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.delete<T>(url, config);
};

export { get, post, put, del };
