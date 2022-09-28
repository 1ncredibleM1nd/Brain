import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

interface IResponse<T> {
  data: {
    token?: string;
  } & T;
  error: number;
  pid: string;
}

const axiosInstance = axios.create({
  baseURL: process.env.VITE_APP_API_URL,
  withCredentials: true,
  headers: {},
});

export class Request {
  private instance = axiosInstance;
  private direction = "";

  public setDirection(value: string) {
    this.direction = value;
  }

  public setToken = (token: string | null) => {
    if (!token) return;
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  };

  public get = (url: string, config?: AxiosRequestConfig) =>
    this.instance
      .get(`${this.direction}${url}`, config)
      .then(this.responseBody);

  public post = (url: string, body: {}, config?: AxiosRequestConfig) =>
    this.instance
      .post(`${this.direction}${url}`, body, config)
      .then(this.responseBody);

  public put = (url: string, body: {}, config?: AxiosRequestConfig) =>
    this.instance
      .put(`${this.direction}${url}`, body, config)
      .then(this.responseBody);

  public delete = (url: string, config?: AxiosRequestConfig) =>
    this.instance
      .delete(`${this.direction}${url}`, config)
      .then(this.responseBody);

  private responseBody = (response: AxiosResponse<IResponse<any>>) => {
    const resp = response.data;

    if (resp.error) {
      console.log("Api error:", JSON.stringify(resp.pid));
      return null;
    }

    if (resp.data?.token) {
      this.setToken(resp.data.token);
    }

    return resp.data ?? response;
  };
}

export const request = new Request();
